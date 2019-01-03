import React, { Component } from "react";

class usersDetails extends Component {
  render() {
    const { users } = this.props;
    return (
      <div className="fetch_users_content">
        {users.length !== 0 &&
          users.message !== "Not Found" && (
            <div className="fetch_users_details">
              <img
                src={users.avatar_url}
                alt={users.login}
                className="fetch_users_image"
              />
              <h2 className="fetch_users_name">{users.name}</h2>
              <pre className="fetch_users_bio">{users.bio || "NULL"}</pre>
              <ul className="fetch_other_details">
                <li className="fetch_other_details_list_item">
                  <span>Blog: </span> {users.blog || "NULL"}
                </li>
                <li className="fetch_other_details_list_item">
                  <span>Location: </span> {users.location || "NULL"}
                </li>
                <li className="fetch_other_details_list_item">
                  <span>Followers url: </span> {users.followers_url}
                </li>
                <li className="fetch_other_details_list_item">
                  <span>Following: </span> {users.following}
                </li>
                <li className="fetch_other_details_list_item">
                  <span>Followers</span> {users.followers}
                </li>
                <li className="fetch_other_details_list_item">
                  <span>Url:</span> {users.url}
                </li>
              </ul>
            </div>
          )}
      </div>
    );
  }
}

export default usersDetails;
