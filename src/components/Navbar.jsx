import React, { useState } from "react";
import { Menu, Container, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { IoMdPlanet } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

import { IconContext } from "react-icons";

export default function Navbar() {
    const [activeItem, setactiveItem] = useState("Início");

    function handleItemClick(e, { name }) {
        setactiveItem(name);
    }

    return (
        <div>
            <Segment inverted>
                <Menu stackable inverted pointing secondary>
                    <Container>
                        <Menu.Item
                            as={ Link }
                            to="/"
                            name="Início"
                            active={ activeItem === "Início" }
                            onClick={ handleItemClick }
                        >
                            <FaHome /> &nbsp;&nbsp; Início
                        </Menu.Item>

                        <Menu.Item
                            as={ Link }
                            to="/personagens"
                            name="Personagens"
                            active={ activeItem === "Personagens" }
                            onClick={ handleItemClick }
                        >
                            <MdPeople /> &nbsp;&nbsp; Personagens
                        </Menu.Item>

                        <Menu.Item
                            as={ Link }
                            to="/planetas"
                            name="Planetas"
                            active={ activeItem === "Planetas" }
                            onClick={ handleItemClick }
                        >
                            <IoMdPlanet /> &nbsp;&nbsp; Planetas
                        </Menu.Item>

                        <Menu.Menu position="right">
                            <Menu.Item
                                name="github"
                                href="https://github.com/lucasm-moreira"
                                target="_blank"
                            >
                                <IconContext.Provider value={{ size: "1.5em" }}>
                                    <FaGithub />
                                </IconContext.Provider>
                            </Menu.Item>                                
                        </Menu.Menu>                                            
                    </Container>
                </Menu>
            </Segment>
        </div>
    );
}