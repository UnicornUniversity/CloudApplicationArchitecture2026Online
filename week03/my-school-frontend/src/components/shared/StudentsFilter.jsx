export default function StudentsFilter({
                                           classesList,
                                           currentIdClass,
                                           classesHandler,
                                           subjectsList, isSubjectsVisible = true}) {

    function classChanged(event) {
        classesHandler(parseInt(event.target.value));
    }

    return (
        <>
            <div className="col-sm">
                <label htmlFor="classSelector">Class:</label>
                <select name="classSelector" className="form-select" onChange={classChanged}>
                    {
                        classesList.map((cl) =>
                            <option value={cl.id}
                                    selected={parseInt(cl.id) === parseInt(currentIdClass)}>
                                {cl.name}
                            </option>
                        )
                    }
                </select>
            </div>
            {
                isSubjectsVisible && <div className="col-sm">
                    <label htmlFor="subjectsSelector">Subject:</label>
                    <select name="subjectsSelector" className="form-select">
                        {
                            subjectsList.map((sj) =>
                                <option value={sj.id}>{sj.name}</option>
                            )
                        }
                    </select>
                </div>
            }
        </>
    );
}