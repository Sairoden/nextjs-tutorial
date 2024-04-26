"use client";

export default function error(error) {
  console.log(error.error.message);

  return <div>there was an error...</div>;
}
