import { api } from "../../api/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { LoggedNavbar } from "../../components/LoggedNavbar/index";

export function PageCategory() {
	const [data, setData] = useState([{ name: "", description: "", transactions: [] }]);

	useEffect(() => {
		async function Categories() {
			try {
				const response = await api.get("/category/categories");
				setData(response.data);
			} catch (error) {
				if (error) {
					return toast.error("could not load categories");
				}
			}
		}
		Categories();
	}, []);

	return (
		<div>
			<LoggedNavbar />
			<Toaster />

			<h2>Categories</h2>

			<div>
				<Link to="/category/create" className="btn btn-primary">
					<button class="btn btn-primary btn-lg px-5 mx-5" type="button">
						Create Category
					</button>
				</Link>
			</div>

			<table className="table">
				<thead>
					<th>Code</th>
					<th>Description</th>
					<th></th>
					<th></th> 
				</thead>
        <tbody>
				{data.map((current) => {
					return (
						<tr>
							<td>
								<p>{current.code}</p>
							</td>
							<td>
								<p>{current.description}</p>
							</td>
							<td>
								<Link to={`/category/edit/${current._id}`}>
									<button class="btn btn-primary btn-lg px-3 mx-1">EDIT</button>
								</Link>
							</td>
							<td>
								<Link to={`/category/delete/${current._id}`}>
									<button class="btn btn-danger btn-lg px-2">DELETE</button>
								</Link>
							</td>
						</tr>
					);
				})}
        </tbody>
			</table>
		</div>
	);
}
