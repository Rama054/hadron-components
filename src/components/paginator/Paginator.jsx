import { LuChevronLeft, LuChevronRight, LuChevronsLeft, LuChevronsRight } from "react-icons/lu";
import PropTypes from 'prop-types';
import '../../css/paginator.css';


export default function Paginator({ currentPage, radius="md", color, maxVisible, totalPages, onPageChange, ...props }) {
    const visiblePages = [];

    if (totalPages <= maxVisible) {
        // Si hay pocas páginas, las mostramos todas
        visiblePages.push(...Array.from({ length: totalPages }, (_, i) => i + 1));
    } else {
        let start, end;

        if (currentPage <= Math.ceil(maxVisible / 2)) {
            // Si currentPage está cerca del inicio, mostramos las primeras páginas
            start = 1;
            end = maxVisible;
        } else if (currentPage >= totalPages - Math.floor(maxVisible / 2)) {
            // Si currentPage está cerca del final, mostramos las últimas páginas
            start = totalPages - maxVisible + 1;
            end = totalPages;
        } else {
            // Si currentPage está en el medio, centramos la vista
            const isOdd = maxVisible % 2 !== 0 ? 0 : 1;
            start = currentPage - Math.floor(maxVisible / 2) + isOdd;
            end = currentPage + Math.floor(maxVisible / 2);
        }

        for (let i = start; i <= end; i++) {
            visiblePages.push(i);
        }
    }

    return (
        <nav className="q-paginator" {...props} data-color={color} data-radius={radius}>
            <ul className="q-list-paginator">
                <li
                    onClick={() => onPageChange(1)}
                    className={`q-page ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    <LuChevronsLeft />
                </li>
                <li
                    onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                    className={`q-page ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    <LuChevronLeft />
                </li>
                {visiblePages.map((page, index) => (
                    <li
                        key={index}
                        className={`q-page ${currentPage === page ? "active" : ""}`}
                        onClick={() => typeof page === "number" && onPageChange(page)}
                    >
                        {page}
                    </li>
                ))}
                <li
                    onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                    className={`q-page ${currentPage === totalPages ? 'disabled' : ''}`}
                >
                    <LuChevronRight />
                </li>
                <li
                    onClick={() => onPageChange(totalPages)}
                    className={`q-page ${currentPage === totalPages ? 'disabled' : ''}`}
                >
                    <LuChevronsRight />
                </li>
            </ul>
            {totalPages > 0 && <span>Página {currentPage} de {totalPages}</span>}
        </nav>
    )
}

Paginator.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    maxVisible: PropTypes.number,
    color: PropTypes.string,
    radius: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full'])
};