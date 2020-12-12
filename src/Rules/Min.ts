import Rule from "./Rule";

export default class Min extends Rule {

    static Description = `La longeur ou la valeur du champs doit être supérieur ou égale à la valeur passé en paramètre`;

    static ErrorMessageNumber = `Le champs :attr: doit être supérieur ou égale à :num: !`
    static ErrorMessage = `Le champs :attr: doit comporter au moins :num: caractères !`

    constructor() {
        super('min')
    }

    applyRule(params: string) {
        let length = parseInt(params)
        if (
            this.input!.type == 'number' ||
            (this.input!.hasAttribute('data-input-type') && this.input!.getAttribute('data-input-type') == 'number')
        ) {
            if (parseInt(this.input!.value) < length) {
                this.setErrorMessage(Min.ErrorMessageNumber, { num: length })
                return this.error()
            }
        } else if (this.input!.value.length < length) {
            this.setErrorMessage(Min.ErrorMessage, { num: length })
            return this.error()
        }
    }

}