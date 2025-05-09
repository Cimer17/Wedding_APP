import "../styles/preloader.css";

const heartPattern = [
    0, 1, 0, 1, 0,
    1, 1, 1, 1, 1,
    1, 1, 1, 1, 1,
    0, 1, 1, 1, 0,
    0, 0, 1, 0, 0,
];

const delayMap = [
    0.3, 0.1, 0.3, 0.1, 0.3,
    0.2, 0.2, 0.2, 0.2, 0.2,
    0.1, 0.1, 0.1, 0.1, 0.1,
    0.0, 0.0, 0.0, 0.0, 0.0,
    0.1, 0.1, 0.0, 0.1, 0.1,
];

const PreloaderHeart = ({ visible }: { visible: boolean }) => (
    <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${
            visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
    >
        <div className="heart-grid">
            {heartPattern.map((cell, i) => (
                <div
                    key={i}
                    className={cell ? "cell pulse" : "cell empty"}
                    style={{ animationDelay: `${delayMap[i]}s` }}
                />
            ))}
        </div>
    </div>
);

export default PreloaderHeart;
