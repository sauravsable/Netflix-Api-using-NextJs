import React from 'react'
import MovieCard from '@/app/components/MovieCard'
import styles from "@/app/styles/common.module.css"

export default async function page() {

  await new Promise(resolve => setTimeout(resolve, 1000));

  const url = process.env.RAPID_URL;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key':process.env.API_KEY,
      'X-RapidAPI-Host': process.env.HOST
    }
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;
  // console.log(main_data.jawSummary)

return (
  <>
  <section className={styles.movieSection}>
      <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
              {
                  main_data.map((curElem) => {
                      return <MovieCard key={curElem.id} {...curElem} />
                  })
              }
          </div>
      </div>
  </section>
</>
  )
}
