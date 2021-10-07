const ListItem = (props) => {
    return (
        <div className="list-item-container">
            
            <div className="company-image">
                <h2>Enter your image here</h2>
            </div>

            <div className="list-item">
                <div className="company-tags">

                    <div className="listed-company">
                        <h6>Manage</h6>
                    </div>

                    <div className="new-job-tag">
                        <h6>New</h6>
                    </div>

                    <div className="is-featured">
                        <h6>featured</h6>
                    </div>
                </div>

                <div>
                    <p className="job-title">Senior Full stack developer</p>
                </div>

                <div>
                    <p className="time-registered">1 d ago</p>
                    <p className="listing-type"> Full Time</p>
                    <p className="listing-location">USA only</p>
                </div>

                <div className="rolls-tags">
                    <p>********************</p>
                    <h6 className="role">Fullstack</h6>
                    <h6 className="level">midWeight</h6>
                    <h6 className="languages">HTML css js</h6>
                    <p>********************</p>
                </div>

            </div>
        </div>

    )

}

export default ListItem;