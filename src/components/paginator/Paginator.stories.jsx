import { useState } from "react";
import Paginator from "./Paginator";
import useThemeMode from '../../hooks/useThemeMode';
import '../../css/theme.css';

export default {
    title: "Components/Paginator",
    component: Paginator,
};

export const Default = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const { toggleTheme } = useThemeMode();

    return (
        <>
        <button onClick={toggleTheme}>cambiar</button>
        <Paginator currentPage={currentPage} maxVisible={7} totalPages={8} onPageChange={handlePageChange} />
        <Paginator currentPage={currentPage} color="danger" maxVisible={7} totalPages={8} onPageChange={handlePageChange} />
        <Paginator currentPage={currentPage} color="success" maxVisible={7} totalPages={8} onPageChange={handlePageChange} />
        <Paginator currentPage={currentPage} color="indigo" maxVisible={7} totalPages={8} onPageChange={handlePageChange} />
        <Paginator currentPage={currentPage} color="blue" maxVisible={7} totalPages={8} onPageChange={handlePageChange} />
        <Paginator currentPage={currentPage} color="orange" maxVisible={7} totalPages={8} onPageChange={handlePageChange} />
        <Paginator currentPage={currentPage} color="lime" maxVisible={7} totalPages={8} onPageChange={handlePageChange} />
        <Paginator currentPage={currentPage} color="lime" radius="full" maxVisible={7} totalPages={8} onPageChange={handlePageChange} />
        <Paginator currentPage={currentPage} color="lime" radius="none" maxVisible={7} totalPages={8} onPageChange={handlePageChange} />
        </>
    );
}