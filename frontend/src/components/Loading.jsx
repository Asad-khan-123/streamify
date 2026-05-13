const Loading = () => {
  return (
    <div
      className="
        min-h-screen
        bg-[#F5F7FF]
        flex
        items-center
        justify-center
        relative
        overflow-hidden
      "
    >

      {/* BACKGROUND BLUR */}
      <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-[#6C63FF]/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-100px] right-[-100px] w-72 h-72 bg-pink-400/20 rounded-full blur-3xl"></div>

      {/* LOADER */}
      <div className="relative flex items-center justify-center">

        {/* OUTER CIRCLE */}
        <div
          className="
            absolute
            w-20
            h-20
            rounded-full
            border-[4px]
            border-[#DCDFFF]
            border-t-[#6C63FF]
            animate-spin
          "
        ></div>

        {/* INNER LOGO */}
        <div
          className="
            w-14
            h-14
            rounded-2xl
            bg-gradient-to-br
            from-[#6C63FF]
            to-[#8B85FF]
            flex
            items-center
            justify-center
            shadow-[0_10px_30px_rgba(108,99,255,0.35)]
          "
        >

          <span
            className="
              text-white
              text-xl
              font-black
            "
          >
            L
          </span>

        </div>

      </div>

    </div>
  );
};

export default Loading;