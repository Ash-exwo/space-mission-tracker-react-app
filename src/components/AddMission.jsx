import React from 'react'

const AddMission = () => {
    return (
        <div
            style={{
                backgroundColor: "#F4F7F2",
                minHeight: "100vh"
            }}
        >
            <div className="container py-5">

                <div className="row justify-content-center">

                    <div className="col-12 col-md-10 col-lg-8">

                        <div
                            className="card shadow border-0 rounded-4"
                            style={{ backgroundColor: "#FFFFFF" }}
                        >

                            <div className="card-body p-5">

                                <div className="text-center mb-4">
                                    <h2
                                        className="fw-bold"
                                        style={{ color: "#2B5748" }}
                                    >
                                        Add Space Mission
                                    </h2>

                                    <p
                                        className="text-muted"
                                        style={{ fontSize: "15px" }}
                                    >
                                        Enter the details of the new mission
                                    </p>
                                </div>

                                <div className="row g-4">

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Mission ID
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Mission ID"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Mission Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Mission Name"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Agency
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Agency"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Launch Vehicle
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Launch Vehicle"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Destination
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Destination"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Mission Type
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Orbiter / Rover / Satellite"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Budget (in Crores)
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Budget"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Launch Year
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Enter Launch Year"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Status
                                        </label>
                                        <select className="form-select">
                                            <option selected>Select Status</option>
                                            <option>Planned</option>
                                            <option>Upcoming</option>
                                            <option>Active</option>
                                            <option>Completed</option>
                                        </select>
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label fw-semibold">
                                            Image URL
                                        </label>
                                        <input
                                            type="url"
                                            className="form-control"
                                            placeholder="Enter Image URL"
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label className="form-label fw-semibold">
                                            Description
                                        </label>
                                        <textarea
                                            className="form-control"
                                            rows="4"
                                            placeholder="Enter Mission Description"
                                        ></textarea>
                                    </div>

                                    <div className="col-12 text-center mt-3">
                                        <button
                                            className="btn px-5 py-2 fw-bold"
                                            style={{
                                                backgroundColor: "#2B5748",
                                                color: "#FFFFFF",
                                                border: "none",
                                                borderRadius: "10px"
                                            }}
                                        >
                                            Add Mission
                                        </button>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default AddMission