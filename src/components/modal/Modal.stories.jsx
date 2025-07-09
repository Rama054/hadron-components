
import Modal from "./Modal";
import useThemeMode from '../../hooks/useThemeMode';
import Button from "../button/Button";

import '../../css/theme.css';
import { useState } from "react";

export default {
    title: "Components/Modal",
    component: Modal,
};


export const Default = () => {
    const { toggleTheme } = useThemeMode();

    const [open, setOpen] = useState(false);


    return (
        <>
            <button onClick={toggleTheme}>cambiar</button>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", height: "150vh" }}>
                <Modal.Root>
                    <Modal.Trigger>
                        <Button>Abri modal</Button>
                    </Modal.Trigger>
                    <Modal.Content title="Title super mega largo tan ">
                        <p>Modal Content</p>
                        <Modal.Footer>
                            <Button data-close>Cerrar</Button>
                            <Button>Accion</Button>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal.Root>


                <Button onClick={() => setOpen(true)}>Abrir modal no trigger</Button>


                <Modal.Root open={open} onOpenChange={setOpen}>
                    <Modal.Trigger>
                        <Button>Abri modal owo</Button>
                    </Modal.Trigger>
                    <Modal.Content title="Title super mega largo tan sadsad awsd sad asdasd asd as dasd as" subtitle="Subtitle super mega largo tan sadsad awsd sad asdasd asd as dasd as">
                        <p>Modal Content</p>
                        <Modal.Footer>
                            <Button onClick={() => setOpen(false)}>Cerrar</Button>
                            <Button>Accion</Button>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal.Root>
            </div>
        </>
    );
}