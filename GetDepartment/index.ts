import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import Department from "../models/department";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const id = req.params.id || "";
    
    if(id === "") {
        //find all
        const departments = await Department.findAll();
        context.res = {
            body: departments
        }
    }
    else {
        //find by id
        const department = await Department.findByPk(id)
        if (department) {
            context.res = {
                body: department
            }
        }
        else {
            context.res = {
                status: 404,
                body: "department not found"
            }
        }
    }
};

export default httpTrigger;