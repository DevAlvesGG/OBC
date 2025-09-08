export {spaceship, Astronaut};

interface Spaceship {
    name: string;
    speed: number;
}

interface Astronaut {
    name: string;
    age: number;
}

const spaceship: Spaceship = {
    name: "Enterprise",
    speed: 1000,
};