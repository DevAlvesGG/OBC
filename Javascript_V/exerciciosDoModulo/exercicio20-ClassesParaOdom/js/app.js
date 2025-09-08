import { Component } from "./Component.js";
import { Form } from "./Form.js";
import { Label } from "./Label.js";
import { Input } from "./Input.js";


const title = new Component( 'h1', 'body', {textContent: 'Olá mundo'} )

title.tag = 'h3';

title.build().render();

const form = new Form('body');

const label = new Label('Nome', form, { htmlFor: 'nameInput' });

const input = new Input(form, { id: 'nameInput', name: 'name'})

form.render();
label.render();



form.addChildren(
    new Component('br'),
    new Component('br'),
    new Label ('Data de Nascimento', form , {htmlFor: 'birthdayInput'}),
    new Input ( form, {id: 'birthidayInput', name: 'birthiday'})
);  