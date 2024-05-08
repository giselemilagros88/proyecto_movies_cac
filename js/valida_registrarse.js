/*Esta línea añade un evento al documento que se activa cuando el contenido HTML ha sido completamente cargado y parseado. En otras palabras, se ejecuta cuando el DOM está listo para ser manipulado.*/
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    /*Aquí se agrega un evento de escucha al formulario que se activa cuando se intenta enviar el formulario. */
    form.addEventListener('submit', (event) => {
        if (!validateForm()) {
            console.log('El formulario no es válido. Por favor, corrige los errores.');
            event.preventDefault(); // Esta línea evita que el formulario se envíe si hay errores de validación
        } else {
            console.log('El formulario es válido. Enviar datos...');
            // Aquí puedes enviar los datos del formulario o realizar otras acciones
        }
    });

    const validateForm = () => {
        let isValid = true;

        // Validar campo de nombre
        isValid = validateField('nombre', 'El nombre es obligatorio') && isValid;

        // Validar campo de apellido
        isValid = validateField('apellido', 'El apellido es obligatorio') && isValid;

        // Validar campo de email
        isValid = validateEmailField('email', 'El correo electrónico no es válido') && isValid;

        // Validar campo de contraseña
        isValid = validateField('password', 'La contraseña es obligatoria') && isValid;

        // Validar campo de fecha de nacimiento
        isValid = validateField('fechaNacimiento', 'La fecha de nacimiento es obligatoria') && isValid;

        // Validar campo de país
        isValid = validateField('pais', 'El país es obligatorio') && isValid;

        // Validar checkbox de términos y condiciones
        const terminos = document.getElementById('terminos').checked;
        if (!terminos) {
            isValid = false;
            setErrorFor(document.getElementById('terminos'), 'Debes aceptar los términos y condiciones');
        } else {
            setSuccessFor(document.getElementById('terminos'));
        }

        return isValid;
    };
    // recibe el id del campo y el mensaje de error y valida si el campo está vacío
    const validateField = (fieldId, errorMessage) => {
        const field = document.getElementById(fieldId);// levanta el elemento por su id
        const value = field.value.trim(); // al value se le quitan los espacios en blanco al principio y al final
        //valida si el campo está vacío
        if (value === '') {
            //invoca la función setErrorFor y le pasa el campo y el mensaje de error
            setErrorFor(field, errorMessage);
            return false;
        } else {
            //invoca la función setSuccessFor y le pasa el campo
            setSuccessFor(field);
            return true;
        }
    };
    // recibe el campo y el mensaje de error y valida si el campo está vacío o si el email no es válido
    const validateEmailField = (fieldId, errorMessage) => {
        const field = document.getElementById(fieldId);
        const email = field.value.trim();
        if (email === '') {
            setErrorFor(field, 'El correo electrónico es obligatorio');
            return false;
        } else if (!isEmail(email)) {
            setErrorFor(field, errorMessage);
            return false;
        } else {
            setSuccessFor(field);
            return true;
        }
    };

    // recibe el campo y el mensaje de error y agrega la clase error al div padre del campo y muestra el mensaje de error
    const setErrorFor = (input, message) => {
        // Obtiene el div padre del campo
        const formControl = input.closest('div');
        //levanta por su clase el elemento que contiene el mensaje de error
        const errorText = formControl.querySelector('.error-text');
        //agrega la clase error al div padre del campo
        formControl.classList.add('error');
        //muestra el mensaje de error
        errorText.innerText = message;
        //pone el foco en el campo
        input.focus();
    };
    
    // recibe el campo y elimina la clase error del div padre del campo y el mensaje de error
    const setSuccessFor = (input) => {
        // Obtiene el div padre del campo
        const formControl = input.closest('div');
        //quita la clase error al div padre del campo
        formControl.classList.remove('error');
        //levanta por su clase el elemento que contiene el mensaje de error
        const errorText = formControl.querySelector('.error-text');
        //elimina el mensaje de error
        errorText.innerText = '';
    };
    // funcion que valida si es un mail valido con una expresion regular
    const isEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };
      // Agrega eventos para borrar las clases de error cuando se completa el input o se presiona Tab
      form.querySelectorAll('input').forEach(input => {
        input.addEventListener('input', () => {
            // Obtiene el valor del campo y elimina los espacios en blanco al principio y al final
            const value = input.value.trim();
            // Si el campo no está vacío, elimina cualquier mensaje de error
            if (value !== '') {
                setSuccessFor(input);
            }
        });
    });
     // Agrega eventos para borrar las clases de error cuando se selecciona una opción del select
     form.querySelectorAll('select').forEach(select => {
        select.addEventListener('change', () => {
            // Obtiene el valor seleccionado del campo de selección
            const value = select.value;
            // Si se selecciona una opción, elimina cualquier mensaje de error
            if (value !== '') {
                setSuccessFor(select);
            }
        });
    });
});
