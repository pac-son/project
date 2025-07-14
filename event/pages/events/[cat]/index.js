const EventPerCityPage  = () => {
  return (
    <div>
      <h1>Events in London</h1>

      <a href="/events/london/ev1">{' '}<img /><h2> Event 1 </h2>{' '}</a>
      <a href="">{' '}<img /><h2> Event 2 </h2>{' '}</a>
      <a href="">{' '}<img /><h2> Event 3 </h2>{' '}</a>
      <a href="">{' '}<img /><h2> Event 4 </h2>{' '}</a>
      <a href="">{' '}<img /><h2> Event 5 </h2>{' '}</a>
      <a href="">{' '}<img /><h2> Event 6 </h2>{' '}</a>
    </div>
  )
}

export default EventPerCityPage;

export async function getStaticPaths () {

  const { events_categories } = await import('/data/data.json');
  const allPaths = events_categories.map(ev => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  })
  console.log(allPaths);
  
  return {
    path: allPaths,
  }
}