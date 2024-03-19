import { middleware } from "../middleware";

export async function PopulateQuestions(question : string){
    const data =  await middleware()
    console.log(data)
    return (
        <div>
          data
        </div>
      );
}