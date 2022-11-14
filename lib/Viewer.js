
export class Viewer {
    static container;
    static databaseId;
    static form;
    static server;

    static LAST_VALUE_OF_IMAGE_FORMAT;

    static setContainer(container) {
        Viewer.container = container;
    }

    static setDatabaseId(databaseId) {
        Viewer.databaseId = databaseId;
    }

    static setForm(form) {
        Viewer.form = form;
        Viewer.form.addEventListener('input', Viewer.onInput);
        Viewer.form.addEventListener('submit', Viewer.onSubmit);

        const formData = new FormData(form);

        Viewer.LAST_VALUE_OF_IMAGE_FORMAT = formData.get('imageFormat');
        Viewer.onSubmit();
    }

    static setServer(serverURL) {
        Viewer.server = serverURL;
    }

    static getFormValues() {
        const formData = new FormData(Viewer.form);
        const values = {};
        [...formData.keys()].forEach(key => values[key] = formData.get(key));
        return values;
    }

    static onInput(event) {
        Viewer.checkImageQuality();

        let { imageFormat } = Viewer.getFormValues();
        Viewer.LAST_VALUE_OF_IMAGE_FORMAT = imageFormat;
    }

    static checkImageQuality() {
        let { imageFormat, imageQuality } = Viewer.getFormValues();

        if (Viewer.imageMaxQualityValueMustChange(Viewer.LAST_VALUE_OF_IMAGE_FORMAT, imageFormat)) {
            Viewer.changeImageMaxQualityValue(imageFormat);
            imageQuality = Viewer.changeImageQualityForItsFormat(imageQuality, imageFormat);
        }

        new FormData(Viewer.form).set('imageQuality', imageQuality);
        document.getElementById('imageQuality').setAttribute("value", imageQuality);
        document.getElementById('imageQualityIndicator').textContent = imageQuality;
    }

    static imageMaxQualityValueMustChange(lastFormat, currentFormat) {
        if (lastFormat === currentFormat) {
            return false;
        } else if (lastFormat === 'png' || currentFormat === 'png' && lastFormat != currentFormat) {
            return true;
        } else {
            return false;
        }
    }

    static changeImageMaxQualityValue(imageFormat) {
        const imageQualityInput = document.getElementById('imageQuality');
        if (imageFormat === 'png') {
            imageQualityInput.setAttribute('max', "9");
        } else {
            imageQualityInput.setAttribute('max', "100");
        }
    }

    static changeImageQualityForItsFormat(imageQuality, imageFormat) {
        if (typeof imageQuality === 'string')
            imageQuality = parseInt(imageQuality);

        if (imageFormat === 'png') {
            return Math.round(imageQuality * 9 / 100);
        } else {
            return Math.round(imageQuality / 9 * 100);
        }
    }

    static onSubmit(event) {
        if (event) event.preventDefault();
        const src = Viewer.generateImageUrlFromFormValues();
        Viewer.container.setAttribute('src', src);
    }

    static generateImageUrlFromFormValues() {
        const parameters = Viewer.mapFormValuesToUrlParameters();
        return `${Viewer.server}/ImageFromBookmark?databaseId=${Viewer.databaseId}${parameters}`;
    }

    static mapFormValuesToUrlParameters() {
        const formData = new FormData(Viewer.form)
        let parameters = "";
        [...formData.keys()].forEach(key => parameters += `&${key}=${formData.get(key)}`);
        return parameters;
    }
}