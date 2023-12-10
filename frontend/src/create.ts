import http from "./helpers/http";

function create() {
    return {
        show: true,
        create: async function () {
            try {
                console.log("create")
               const { data } = await http.post("/user/create");
            console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
    }
}

export default create;