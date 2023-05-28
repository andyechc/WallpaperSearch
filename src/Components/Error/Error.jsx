export function Error({error}) {
    return (
      <>
        {error &&
          <p>{error}</p>}
      </>
    )
  }