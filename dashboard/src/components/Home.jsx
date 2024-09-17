const Home = () => {
    return (
        <div className="main-content">
                {/* Filter Section */}
                <div className="filter-section">
                    <div className="filter-text">
                        <h5>Filter Selection</h5>
                    </div>
                    <div className="filter-data">
                        <label htmlFor="filter1"><span>Lorem ipsum</span></label>
                        <select id="filter1">
                            <option>Lorem Iporam</option>
                        </select>
                        <select id="filter2">
                            <option>Lorem Iporam</option>
                        </select>
                        <button>▶</button>
                    </div>
                </div>

                {/* Table Section */}
                <div className="form-section">
                    <div className="form-text">
                        <h5>Lorem ipsum</h5>
                    </div>
                    <div className="section-content">
                        <div className="result">

                            <label htmlFor="">Show record:</label>
                            <select id="filter1">
                                <option>10</option>
                            </select>

                        </div>

                        <div className="search-bar">
                            <input type="text" placeholder="Search" />
                        </div>
                    </div>
                    <div className="table-section">
                        <table>
                            <thead>
                                <tr>
                                    <th>Lorem Iporam</th>
                                    <th>Lorem Iporam</th>
                                    <th>Lorem Iporam</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Lorem Iporam</td>
                                    <td>Development</td>
                                    <td>7</td>
                                    <td><span className="status on">ON</span></td>
                                    <td><div className="icon-action"><i className="fa-regular fa-file"></i></div></td>
                                </tr>
                                <tr>
                                    <td>Lorem Iporam</td>
                                    <td>abc_xyz</td>
                                    <td>2</td>
                                    <td><span className="status off">OFF</span></td>
                                    <td><div className="icon-action"><i className="fa-regular fa-file"></i></div></td>
                                </tr>
                                <tr>
                                    <td>Lorem Iporam</td>
                                    <td>abc_xyz</td>
                                    <td>2</td>
                                    <td><span className="status on">ON</span></td>
                                    <td><div className="icon-action"><i className="fa-regular fa-file"></i></div></td>
                                </tr>
                                <tr>
                                    <td>Lorem Iporam</td>
                                    <td>abc_xyz</td>
                                    <td>1</td>
                                    <td><span className="status off">OFF</span></td>
                                    <td><div className="icon-action"><i className="fa-regular fa-file"></i></div></td>
                                </tr>
                                <tr>
                                    <td>Lorem Iporam</td>
                                    <td>abc_xyz</td>
                                    <td>1</td>
                                    <td><span className="status on">ON</span></td>
                                    <td><div className="icon-action"><i className="fa-regular fa-file"></i></div></td>
                                </tr>
                                <tr>
                                    <td>Lorem Iporam</td>
                                    <td>abc_xyz</td>
                                    <td>2</td>
                                    <td><span className="status on">ON</span></td>
                                    <td><div className="icon-action"><i className="fa-regular fa-file"></i></div></td>
                                </tr>
                                <tr>
                                    <td colSpan="5">
                                        <div className="pre-section">
                                            <div className="text">
                                                <h6>Showing 4 of 4 entries</h6>
                                            </div>
                                            <div className="btn-section">
                                                <a href="#" className="previous">Previous</a>
                                                <button>1</button>
                                                <a href="#" className="next">Next</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    );
};

export default Home;
