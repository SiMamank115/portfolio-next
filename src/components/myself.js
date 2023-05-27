export default function MySelf() {
    return (
        <div data-scroll-section className="bg-gradient-to-b from-[#1C2737] to-slate-800 px-8 flex min-h-[200vh] flex-wrap justify-evenly items-center section-1">
            <div data-scroll data-scroll-speed={4} className="parallax-introduce max-w-[45%]">
                <div>
                    <div data-scroll data-scroll-speed={-1.5} className="parallax-introduce-image">
                        <img src={"/glotak-2-3.webp"}></img>
                    </div>
                </div>
            </div>
            <div className="grow max-w-[45%] text-gray-100 text-xl">
                <p className="indent-5" data-scroll data-scroll-speed=".5">
                    Nama saya <strong>Faiz Ramadhan</strong> yang akrab dipanggil dengan <strong>Faiz</strong>. Lulus dari <strong>SMKN 5 Malang</strong> di tahun 2023. Lahir dan dibesarkan dikota bunga, Kota <strong>Malang</strong>.{" "}
                </p>
                <p className="mt-5 indent-5" data-scroll data-scroll-speed=".75" data-scroll-delay=".1">
                    Memiliki pengalaman dalam bidang <strong>IT</strong> selama kurang lebih <strong>4</strong> tahun. Saya mengenal <strong>HTML</strong> pada saat permulaan pandemi <strong>Covid-19</strong> yang mana telah dikembangkan selama <strong>4</strong> tahun tersebut secara <strong>otodidak</strong>.
                </p>
                <p className="mt-5 indent-5" data-scroll data-scroll-speed="1" data-scroll-delay=".2">
                    <strong>Menyukai</strong> hal - hal yang <strong>berelasi</strong> dengan kata <strong>digital</strong>. Termasuk diantara nya adalah <strong>Game</strong> dan <strong>Film</strong>.
                </p>
            </div>
        </div>
    );
}
