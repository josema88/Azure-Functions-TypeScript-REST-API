import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import Department from "../models/department";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const { body } = req;
    try {
        const department = await Department.create({
            name: body.name,
            description: body.description,
        });
        context.res = {
            body: department
        }
    } catch (error) {
        console.log(error);
        context.res = {
            status: 500,
            body: "Internal server error, contact API administrator"
        }
    }

};

export default httpTrigger;