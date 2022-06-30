import "../styles/List.css";

export default function List({ title, children, row }) {
    const isListItemsInRow = row
        ? "list__items-wrapper--row"
        : "list__items-wrapper--column";

    return (
        <article className="list">
            <h2 className="list__title">{title}</h2>
            <ul className={`list__items-wrapper ${isListItemsInRow}`}>{children}</ul>
        </article>
    );
}