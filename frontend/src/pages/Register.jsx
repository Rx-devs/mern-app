import { useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'
import { register, reset } from '../features/auth/authSlice'

function Register() {
	const [formData, setFormData] = useState({
		email: '',
		name: '',
		password: '',
		password2: '',
	})
	const { name, email, password, password2 } = formData;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

	useEffect(() => {
		if (isError) {
			toast.error(message)
		}
		if (isSuccess || user) {
			navigate('/')
		}
		dispatch(reset());
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value
		}))
	}
	const onSubmit = (e) => {
		e.preventDefault();

		if (password !== password2) {
			toast.error('Passwords donot match');
		} else {
			const userData = {
				name, email, password
			}
			dispatch(register(userData));
		}
		console.log(formData)
	}

	if (isLoading) {
		return <Spinner/>
	}
	
	return (
		<>
			<section className="heading">
				<h1>
					<FaUser /> Register
				</h1>
				<p>Please create an account!</p>
			</section>
			<section className="form">
				<form onSubmit={onSubmit} className="" action="index.html" method="post">
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							name="name"
							value={name}
							placeholder="Enter your name"
							onChange={onChange} />
					</div>
					<div className="form-group">
						<input
							type="email"
							className="form-control"
							name="email"
							value={email}
							placeholder="Enter your email"
							onChange={onChange} />
					</div>
					<div className="form-group">
						<input
							type="password"
							className="form-control"
							name="password"
							value={password}
							placeholder="Enter your password"
							onChange={onChange} />
					</div>
					<div className="form-group">
						<input
							type="password"
							className="form-control"
							name="password2"
							value={password2}
							placeholder="Confirm password"
							onChange={onChange} />
					</div>
					<div className="form-group">
						<button
							type="submit"
							className="btn btn-block" name="button">
							submit
						</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default Register;
