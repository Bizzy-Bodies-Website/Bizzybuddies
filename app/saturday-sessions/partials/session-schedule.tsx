interface Session {
  _id: string;
  time: string;
  category: string;
  ageGroup: string;
  price: string;
}

export default function SessionSchedule({ data }: any) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 bg-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">OUR LATEST SESSION DATES</h1>

      <div className="bg-black text-white p-4 text-center mb-6">
      <p className="text-lg">CURRENT DATES - Saturday 17th April - Saturday 17th July</p>
      </div>

      {/* Table Headers */}
      <div className="grid grid-cols-3 text-center font-medium mb-2">
      <div className="p-4 bg-gray-50">TIME</div>
      <div className="p-4 bg-gray-50">AGE GROUP</div>
      <div className="p-4 bg-gray-50">PRICE</div>
      </div>

      {/* Dynamically render session data */}
      {data?.map((session: Session, index: number) => (
      <div
        key={session._id}
        className={`grid grid-cols-3 text-center ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
      >
        <div className="p-4">{session.time}</div>
        <div className="p-4">
        <div className="font-medium">{session.category.toUpperCase()}</div>
        <div>{session.ageGroup}</div>
        </div>
        <div className="p-4">£{session.price === "N/A" ? "N/A" : `${session.price} per session`}</div>
      </div>
      ))}
    </div>

  )
}

