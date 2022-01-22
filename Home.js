import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';



const currencies = [
	{
		value: 'empty',
		label: '-  -  -',
	},
	{
		value: 'male',
		label: 'Male',
	},
	{
		value: 'female',
		label: 'Female',
	},
];
const Input = styled('input')({
	display: 'none',
});

const Form = () => {
	const [currency, setCurrency] = React.useState('EUR');

	const handleChange = (event) => {
		setCurrency(event.target.value);
	};



	return (
		<Box
			component="form"
			sx={{
				'& .MuiTextField-root': { m: 1, width: '25ch' },
			}}
			noValidate
			autoComplete="off"
		>
			<Grid
				container
				direction="row"
				justifyContent="flex-end"
				alignItems="center"
			>

				<Container >

					<form className="row g-3" action='ratnesh.php' >
						<div className="col-md-6">
							<div className='text-center'>
								<div className='registrstion'>
									<h2 colour="success"> Add Teacher </h2>
								</div>
								<div>



									<div className='text-center'>
										<label htmlFor="icon-button-file">
											<Input accept="image/*" id="icon-button-file" type="file" sx={{ width: 80, height: 80 }} />
											<IconButton color="primary" aria-label="upload picture" component="span" sx={{ width: 80, height: 80 }}>
												<PhotoCamera />

											</IconButton>
										</label>
									</div>
									<TextField type="text" id="standard-basic" label="Name" variant="standard" helperText="Enter the Name" />
									<TextField type="Email" id="standard-basic" label="Email" variant="standard" helperText="Please using valid email" />
									<TextField
										id="standard-select-currency-native"
										select
										label="Gender"
										helperText="Required"
										value={currency}
										onChange={handleChange}
										SelectProps={{
											native: true,
										}}

										variant="standard"
									>
										{currencies.map((option) => (
											<option key={option.value} value={option.value}>
												{option.label}
											</option>
										))}
									</TextField>
									<TextField type="number" id="standard-basic" label="Mobile.No" variant="standard" helperText="Please Enter the 10 digits number" />
									<TextField id="standard-basic" label="Date of Birth" variant="standard" helperText="Required" />
									<TextField id="standard-basic" label="Address" variant="standard" helperText="Required" />
									<TextField id="standard-basic" label="Date of joining" variant="standard" helperText="Required" />
									<TextField id="standard-basic" label="Post" variant="standard" />
									<TextField

										id="standard-multiline-static"
										label="Languages(Skill)"
										multiline
										rows={2}
										variant="standard"
									/>
									<TextField
										id="standard-multiline-static"
										label="Project(Work skill)"
										multiline
										rows={2}
										variant="standard"
									/>
									<div className='text-center' >
										<Button type="submit" variant="contained" size="large" >Submit</Button>
									</div>
								</div>
							</div>
						</div>
					</form>
				</Container>
			</Grid>
		</Box>
	);
}

export default Form;