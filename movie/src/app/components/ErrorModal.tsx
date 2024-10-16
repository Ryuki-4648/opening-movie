export default function ErrorModal() {
  return (
    <div className="bg-white w-[900px] mx-auto rounded-md p-4 border-t-4 border-red01 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="flex justify-between">
        <p className="text-gray01 font-ms">1 of 1 error</p>
        <p className="">
          <span className="bg-yellow01 w-2 h-2 rounded-full inline-block mr-1.5 mb-0.5"></span>Next.js（14.2.13） out of date <span className="text-blue01">（learn more）</span>
        </p>
      </div>
      <p className="my-6 text-gray02 text-xl font-bold">Unhandled Runtime Error</p>
      <div className="border-l-4 pl-2 border-red01 bg-bg01 mb-4">
        <p className="text-red01 font-bold text-sm py-4 tracking-wide">ReferenceError: YourWeddingDate is not defined</p>
      </div>
      <p className="text-xl text-black01 font-bold mb-2">Source</p>
      <div className="bg-black mb-6">
        <div className="border-b border-border01 p-3">
          <p className="text-white">src/app/page.tsx（88:12）@WeddingDate</p>
        </div>
        <div className="py-3 px-4">
          <dl className="text-white">
            <dt>86 |</dt>
            <dd></dd>
          </dl>
          <dl className="text-white">
            <dt>87 |</dt>
            <dd></dd>
          </dl>
          <dl className="text-white">
            <dt>88 |</dt>
            <dd></dd>
          </dl>
        </div>
      </div>
      <p className="text-black01 font-bold text-xl mb-3">Call Stack</p>
      <p className="text-sm">Show collapsed frames</p>
    </div>
  )
}