import React, {useState} from 'react'
import { FormType } from "../types";

export const Form = ({fields}: FormType) => {
    const [value, setValue] = useState('');
    const questions = fields;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (value) {
          setValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="">
            {questions.map(question => {
                return (
                    <div key={question.name}>
                        <label>{question.name}</label>
                        <input placeholder={question.name}></input>
                    </div>
                )
            })}
            <button type="submit">Submit</button>
        </form>
    );
};