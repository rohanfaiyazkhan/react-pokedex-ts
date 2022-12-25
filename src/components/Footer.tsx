import React from "react";

type FooterProps = {};

const currentYear = new Date().getFullYear();

const Footer: React.FC<FooterProps> = (props) => {
    return (
        <div className="w-full pt-8 pb-2 lg:pb-8 text-center text-gray-800 text-sm">
            <p>&copy; {currentYear} Rohan Faiyaz Khan</p>
            <p>
                PokéPedia was created using{" "}
                <a
                    href="https://pokeapi.co"
                    className="font-bold hover:text-gray-700 focus:underline"
                >
                    PokéAPI
                </a>
                . A lot of credit goes to the wonderful team behind the project.
            </p>
        </div>
    );
};

export default Footer;
