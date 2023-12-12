import http from "./helpers/http";

function create() {
    return {
        user: {
            firstName: "",
            lastName: "",
            email: "",
            password: "", // Fixed typo: passworrd to password
        },

        createUser: async function () {
            try {
                const { data } = await http.post("/users/create", this.user);
                console.log(data);
            } catch (error) {
                const errors = error.response?.data?.errors;
                if (errors) {
                    errors.forEach((element) => { // Fixed syntax error here
                        const elementValidator = document.querySelector(
                            `#error-${element.param}`
                        ) as HTMLSpanElement;
                        if (elementValidator) {
                            elementValidator.innerHTML = element.msg;

                            setTimeout(() => {
                                elementValidator.innerHTML = "";
                            }, 3000);
                        }
                    });
                }
                console.error("Error creating user:", error.message);
            }
        },
    };
}

export default create;