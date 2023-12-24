import { Header } from "./Header";
import { Form } from "./Form";
import { Footer } from "./Footer";
import { questions } from "./Questions";

export const Container = () => {
    return (
        <div className ="">
            <Header/>
            <Form fields={questions}/>
            <Footer/>
        </div>
    );
};
