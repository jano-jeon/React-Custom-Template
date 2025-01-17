import TextInput from 'app/shared-components/input/TextInput';
import { setRemember } from 'app/store/rememberSlice';
import withRouter from 'app/util/withRouter';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Main({ navigate }) {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  return (
    <div className='max-w-full'>
      <div className='text-h1'>main</div>
      <h1 className='text-caption xs:text-h6 fhd:text-h1'>h1</h1>
      <h2 className='text-caption xs:text-h5 fhd:text-h2'>h2</h2>
      <h3 className='text-caption xs:text-h4 fhd:text-h3'>h3</h3>
      <h4 className='text-caption xs:text-h3 fhd:text-h4'>h4</h4>
      <h5 className='text-caption xs:text-h2 fhd:text-h5'>h5</h5>
      <h6 className='text-caption xs:text-h1 fhd:text-h6'>h6</h6>
      <TextInput className="w-full min-w-screen border-2 border-black border-solid" maxLength={10} value={text} onChange={(e) => setText(e.target.value)} />
      <button
        className='mt-20 w-[10rem] border-2 border-black border-dashed outline outline-2 outline-red-500'
        type='button'
        onClick={() => {
          dispatch(setRemember(text));
        }}>
        저장
      </button>
      <br />
      <button type='button' onClick={() => navigate('/sub')}>
        서브로 이동
      </button>
    </div>
  );
}

export default withRouter(Main);
