'use server';


import { firestore } from '../../lib/initializeFirebase';

async function readMovie(id) {
  const doc = await firestore.collection('movies').doc(id).get();
  return doc.data();
}

// 5HuTxoifgTgBDWTS0YyT ( example movie )


export async function GET(request, { params }) {
    const movieId = params.id;
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get('userId');
    const timestamps = searchParams.get('timestamps');

    // TODO - connect to firestore and get the movie
    // TODO - check user specific requirements, such as timestamps.. if the user is logged in
    // TODO - create responses, such as 404 if the movie is not found.. 200 if user is authenticated and the movie is found
    // TODO - change request name "getMovie"
    
    let movie = await readMovie(movieId);
    console.log(movie);

  return new Response(movie, {
    status: 200,
  })
}