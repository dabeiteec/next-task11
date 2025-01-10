const phoneValidator = (currentPhone:string) => {
    const phoneRegex = /^\+?[1-9]\d{1,14}$/;
    const errors = [];

    if (currentPhone.length !== 11) {
        errors.push('Неверная длина номера телефона');
    }

    if (!phoneRegex.test(currentPhone)) {
        errors.push('Неверный формат номера телефона');
    }

    return errors;
};

export default phoneValidator;
