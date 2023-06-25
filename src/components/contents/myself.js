export default function MySelf() {
    return (
        <div className="grow sm:max-w-[45%] text-gray-100 lg:text-xl max-w-full">
            <p className="indent-5">
                Nama saya <strong>Faiz Ramadhan</strong>, yang akrab dipanggil dengan <strong>Faiz</strong>. Lulus dari <strong>SMKN 5 Malang</strong> di tahun 2023. Lahir dan dibesarkan dikota bunga, Kota <strong>Malang</strong>.{" "}
            </p>
            <p className="mt-5 indent-5">
                Memiliki pengalaman dalam bidang <strong>IT</strong> selama kurang lebih <strong>4</strong> tahun. Saya mengenal <strong>HTML</strong> pada saat masa awal - awal pandemi <strong>Covid-19</strong>, yang mana telah saya <strong>kembangkan sendiri</strong> selama <strong>4</strong> tahun secara <strong>otodidak</strong>.
            </p>
            <p className="mt-5 indent-5">
                <strong>Menyukai</strong> hal - hal yang <strong>berelasi</strong> dengan kata <strong>digital</strong>. Termasuk diantara nya adalah <strong>Game</strong> dan <strong>Film</strong>. Bermimpi untuk bisa <strong>kuliah</strong> di <strong>luar negri</strong> dan bekerja di mega <strong>company</strong> / <strong>start up</strong>.
            </p>
        </div>
    );
}
export function MyImage() {
    return (
        <div data-scroll data-scroll-speed={4} className="parallax-introduce sm:max-w-[45%] max-w-[80%] mb-[-200px] sm:mb-0">
            <div>
                <div data-scroll data-scroll-speed={-1.5} className="parallax-introduce-image">
                    <img src={"/me.webp"}></img>
                </div>
            </div>
        </div>
    );
}
