import React, {Component} from 'react';
import Repo from './Repo.jsx';

class RepoList extends Component {
	componentDidMount() {
		console.log(this.props)
	}
	render() {
		return(

			<div>
				<label className="label label-primary">User Repositories</label>
				<br />
				<br />
				<ul className="list-group">
					{
						this.props.userRepos.map(repo => {
							return (
								<Repo repo={repo} key={repo.id} />
								)
						})
					}
				</ul>
			</div>

			)
	}
}

export default RepoList