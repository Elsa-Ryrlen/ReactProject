function FilterButton() {
    return (
      <button type="button" className="btn toggle-btn" aria-pressed="true">
        <span> Show sold games </span>
        <span className="visually-hidden"> tasks</span>
      </button>
    );
  }
  
  export default FilterButton;
  