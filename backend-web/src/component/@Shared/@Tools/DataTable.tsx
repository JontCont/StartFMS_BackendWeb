
const DataTable = () => {
    return (
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Task</th>
                        <th>Progress</th>
                        <th>Label</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>Update software</td>
                        <td>
                            <div className="progress progress-xs">
                                <div className="progress-bar progress-bar-danger"></div>
                            </div>
                        </td>
                        <td><span className="badge bg-danger">55%</span></td>
                    </tr>
                    <tr>
                        <td>2.</td>
                        <td>Clean database</td>
                        <td>
                            <div className="progress progress-xs">
                                <div className="progress-bar bg-warning"></div>
                            </div>
                        </td>
                        <td><span className="badge bg-warning">70%</span></td>
                    </tr>
                    <tr>
                        <td>3.</td>
                        <td>Cron job running</td>
                        <td>
                            <div className="progress progress-xs progress-striped active">
                                <div className="progress-bar bg-primary"></div>
                            </div>
                        </td>
                        <td><span className="badge bg-primary">30%</span></td>
                    </tr>
                    <tr>
                        <td>4.</td>
                        <td>Fix and squish bugs</td>
                        <td>
                            <div className="progress progress-xs progress-striped active">
                                <div className="progress-bar bg-success"></div>
                            </div>
                        </td>
                        <td><span className="badge bg-success">90%</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

};




export default DataTable;