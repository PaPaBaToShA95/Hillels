import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { fetchHotelsRequest } from '@/store/actions/hotelActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const lightBlue400 = '#60A5FA';
const lighterBlue = '#90CAF9';
const lightestBlue = '#BBDEFB';
const darkText = '#121212';
const lightText = '#E0E0E0';

const textFieldSx = {
  '& .MuiInputLabel-root': { color: lighterBlue },
  '& .MuiInputBase-input': { color: lightText },
  '& .MuiInputBase-input::placeholder': { color: lighterBlue, opacity: 1 },
  '& .MuiOutlinedInput-notchedOutline': { borderColor: lighterBlue },
  '&:hover .MuiInputLabel-root': { color: lightestBlue },
  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: lightestBlue },
  '&:hover .MuiInputBase-input': { color: 'white' },
  '&.Mui-focused .MuiInputLabel-root': { color: lightestBlue },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: lightestBlue },
  '&.Mui-focused .MuiInputBase-input': { color: 'white' },
};

function SearchForm() {
  const dispatch = useDispatch();

  const onSubmit = values => {
    dispatch(fetchHotelsRequest(values));
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4, maxWidth: 'lg', mx: 'auto' }}>
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12} md={3}>
              <Field
                name="location"
                render={({ input, meta, placeholder }) => (
                  <TextField
                    {...input}
                    label="Місто"
                    placeholder={placeholder}
                    fullWidth
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error ? meta.error : ''}
                    sx={textFieldSx}
                  />
                )}
                placeholder="Введіть місто"
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <Field
                name="price"
                render={({ input, meta, placeholder }) => (
                  <TextField
                    {...input}
                    label="Максимальна ціна"
                    placeholder={placeholder}
                    fullWidth
                    type="number"
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error ? meta.error : ''}
                    sx={textFieldSx}
                  />
                )}
                placeholder="Вкажіть суму"
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <Field
                name="stars"
                render={({ input, meta, placeholder }) => (
                  <TextField
                    {...input}
                    label="Рейтинг"
                    placeholder={placeholder}
                    fullWidth
                    type="number"
                    error={meta.touched && meta.error}
                    helperText={meta.touched && meta.error ? meta.error : ''}
                    sx={textFieldSx}
                  />
                )}
                placeholder="Виберіть рейтинг"
              />
            </Grid>

            <Grid item xs={12} md={3} sx={{ alignSelf: 'flex-end' }}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  height: 52,
                  backgroundColor: lightBlue400,
                  color: darkText,
                  '&:hover': {
                    backgroundColor: lighterBlue,
                  },
                }}
              >
                Знайти
              </Button>
            </Grid>
          </Grid>
        </Box>
      )}
    />
  );
}

export default SearchForm;
