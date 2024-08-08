import React, { useState } from 'react';

const CommentsForm = () => {
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!comment.trim()) {
      setError('Please enter a comment');
      return;
    }

    console.log('Submitting comment:', comment);
    setComment('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} >
      <textarea
        value={comment} style={{width:'320px', height:'550%'}}
        onChange={(e) => setComment(e.target.value)}
        placeholder=" Comment Please" className='button' />
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" style={{ margin: '15px', backgroundColor: "yellow" }} className='button'>Submit</button>
    </form>
  );
};

export default CommentsForm;