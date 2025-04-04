import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLanguage = localStorage.getItem("dana_language") || "vi";

i18n.use(initReactI18next).init({
  resources: {
    vi: {
      translation: {
        welcome: "Welcome!",
        location: {
          title: "Địa chỉ",
        },
        all: "Tìm kiếm",
        guide: "HƯỚNG DẪN DU LỊCH",
        suggest_title: "ĐỊA ĐIỂM ĐỀ XUẤT",
        locations: {
          suoi_luong: "Suối Lương",
          suoi_luong_title: "Suối Lương Đà Nẵng - Hải Vân Park",
          suoi_luong_title1: "Giới thiệu về Suối Lương Đà Nẵng",
          suoi_luong_description:
            "Nằm tại chân đèo Hải Vân, cách trung tâm thành phố Đà Nẵng 20km về hướng Bắc, Khu Du lịch Sinh thái Suối Lương – Hải Vân Park là một điểm đến lý tưởng cho những ai yêu thích thiên nhiên và sự yên bình. Khu du lịch rộng hơn 6 hecta được xây dựng vào năm 2000 bởi Công ty Cổ phần Danatol.",
          suoi_luong_address:
            "Đường Suối Lương, Phường Hoà Hiệp Bắc, Quận Liên Chiểu, TP. Đà Nẵng",
          nam_o: "Rạn Nam Ô",
          nam_o_title: "Bãi Rạn Nam Ô Đà Nẵng",
          nam_o_title1: "Giới thiệu về Bãi Rạn Nam Ô Đà Nẵng",
          nam_o_description:
            "Rạn Nam Ô là một địa điểm hoang sơ và tuyệt đẹp nằm cách trung tâm thành phố Đà Nẵng khoảng 17km về phía Tây Bắc. Nơi đây nổi tiếng với những bãi đá phủ đầy rêu xanh, làn nước biển trong vắt và hệ sinh thái biển phong phú. Rạn Nam Ô không chỉ là điểm đến lý tưởng cho những ai yêu thiên nhiên mà còn là nơi để khám phá nét đẹp văn hóa của làng chài Nam Ô truyền thống. ",
          nam_o_address: "Phường Nam Ô 1, Quận Liên Chiểu, TP. Đà Nẵng",
          cho_han: "Chợ Hàn",
          cho_han_title: "Rảo bước chợ Hàn Đà Nẵng",
          cho_han_title1: "Giới thiệu về Chợ Hàn Đà Nẵng",
          cho_han_description:
            "Chợ Hàn, nằm tại số 119 đường Trần Phú, quận Hải Châu, Đà Nẵng, là một biểu tượng văn hóa nổi bật của thành phố. Được biết đến với không gian mua sắm phong phú, chợ bày bán đủ loại mặt hàng từ quần áo, đồ thủ công mỹ nghệ đến thực phẩm tươi sống và đặc sản miền Trung. Du khách cũng có cơ hội thưởng thức các món ăn địa phương đặc sắc như mì Quảng, bánh xèo và chè Đà Nẵng tại khu ẩm thực sầm uất. Không chỉ là nơi giao thoa văn hóa và lịch sử, chợ Hàn còn mang đến những trải nghiệm đáng nhớ, thu hút du khách gần xa.",
          cho_han_address:
            "119 Đường Trần Phú, Phường Hải Châu 1, Quận Hải Châu, TP. Đà Nẵng",
          cho_con: "Chợ Cồn",
          cho_con_title: "Khám phá Chợ Cồn",
          cho_con_title1: "Giới thiệu về Chợ Cồn",
          cho_con_description:
            "Chợ Cồn, tọa lạc tại số 318 đường Ông Ích Khiêm, phường Hải Châu 2, quận Hải Châu, Đà Nẵng, là một trong những chợ lâu đời và nổi tiếng nhất của thành phố. Được biết đến với sự đa dạng hàng hóa và không khí nhộn nhịp, nơi đây không chỉ là nơi mua sắm mà còn là điểm đến lý tưởng để du khách khám phá văn hóa ẩm thực phong phú của miền Trung. Tại chợ Cồn, du khách có thể thưởng thức nhiều món ăn đặc sản hấp dẫn như bánh bèo, nem lụi, chè Đà Nẵng và còn được trải nghiệm phong cách sống đặc trưng của người dân địa phương, mang lại những kỷ niệm đáng nhớ.",
          cho_con_address:
            "318 Đường Ông Ích Khiêm, Phường Hải Châu 1, Quận Hải Châu, TP. Đà Nẵng",
          bt_cham: "Bảo tàng Điêu khắc Chăm",
          bt_cham_title: "Độc đáo Bảo tàng Điêu khắc Chăm Đà Nẵng",
          bt_cham_title1: "Giới thiệu về Bảo tàng Điêu khắc Chăm",
          bt_cham_description:
            "Bảo tàng Điêu khắc Chăm Đà Nẵng, mở cửa từ năm 1919, lưu giữ hơn 100 năm di sản của vương quốc Chăm Pa cổ. Được xây dựng vào năm 1915 theo kiến trúc Pháp của Henri Parmentier, bảo tàng nhiều lần mở rộng và cải tạo, đạt hạng 1 trong danh sách bảo tàng Việt Nam vào năm 2011. Đây là nơi lưu giữ tinh hoa nghệ thuật và lịch sử của Chăm Pa, hứa hẹn mang đến trải nghiệm đáng nhớ cho du khách.",
          bt_cham_address:
            "02 Đường 2 Tháng 9, Phường Bình Hiên, Quận Hải Châu, TP. Đà Nẵng",
          bt_myThuat: "Bảo tàng Mỹ thuật",
          bt_myThuat_title: "Bảo tàng Mỹ thuật Đà Nẵng",
          bt_myThuat_title1: "Giới thiệu về Bảo tàng Mỹ thuật Đà Nẵng",
          bt_myThuat_description:
            "Bảo tàng Mỹ thuật Đà Nẵng, thành lập ngày 29/7/2014, là một điểm văn hóa quan trọng của thành phố. Nằm trong tòa nhà hiện đại với kiến trúc độc đáo, bảo tàng trưng bày các tác phẩm nghệ thuật và tạo không gian giao lưu văn hóa, giúp người dân và du khách hiểu hơn về nghệ thuật và văn hóa Việt Nam. Dù mới ra đời, nơi đây nhanh chóng thu hút những người yêu thích nghệ thuật và khám phá văn hóa địa phương.",
          bt_myThuat_address:
            "78 Đường Lê Duẩn, Phường Thạch Thang, Quận Hải Châu, TP. Đà Nẵng",
          cau_rong: "Cầu Rồng",
          cau_rong_title: "Cầu Rồng Phun Lửa Phun Nước",
          cau_rong_title1: "Giới thiệu về Cầu Rồng Đà Nẵng",
          cau_rong_description:
            "Cầu Rồng, nằm trên đường Nguyễn Văn Linh, quận Hải Châu, thành phố Đà Nẵng, là một biểu tượng nổi bật của đô thị biển miền Trung. Cây cầu hiện đại bắc qua sông Hàn, với thiết kế hình rồng vàng uốn lượn tượng trưng cho sự thịnh vượng và phát triển. Điểm độc đáo thu hút du khách chính là khả năng phun lửa và nước vào cuối tuần, mang lại trải nghiệm sống động và ấn tượng. Đây không chỉ là công trình giao thông quan trọng, mà còn là niềm tự hào của Đà Nẵng, thể hiện tinh thần mạnh mẽ và vươn tầm quốc tế.",
          cau_rong_address:
            "Đường Nguyễn Văn Linh, Phường Phước Ninh, Quận Hải Châu, TP. Đà Nẵng",
        },
        districts: {
          select: "Chọn địa bàn",
          haiChau: "Quận Hải Châu",
          sonTra: "Quận Sơn Trà",
          nguHanhSon: "Quận Ngũ Hành Sơn",
          lienChieu: "Quận Liên Chiểu",
          camLe: "Quận Cẩm Lệ",
          hoaVang: "Huyện Hoà Vang",
          thanhKhe: "Quận Thanh Khê",
        },
        topics: {
          select: "Chọn một chủ đề",
          stream: "Suối",
          pagoda: "Chùa",
          beach: "Biển",
          bridge: "Cầu",
          museum: "Bảo tàng",
          suggest: "Đề xuất",
          market: "Chợ",
          mountain: "Danh lam thắng cảnh",
          village: "Làng nghề truyền thống",
          other: "Khác",
        },
      },
    },
    ja: {
      translation: {
        welcome: "ようこそ！",
        location: {
          title: "住所",
        },
        guide: "旅行ガイド",
        all: "検索",
        suggest_title: "あなたにおすすめのスポット",
        locations: {
          suoi_luong: "ルオン渓流",
          suoi_luong_title: "ダナン・ルオン渓流 - ハイヴァン・パークー",
          suoi_luong_title1: "ダナン・ルオン渓流についてご紹介",
          suoi_luong_description:
            "ハイヴァン峠の麓、ダナン市中心部から北へ約20kmに位置するエコツーリズムエリア「ルオン渓流－ハイヴァン・パーク」は、自然と静けさを愛する人々にとって理想的な目的地です。この観光地は、2000年にダナトル株式会社によって6ヘクタール以上の広さで建設されました。",
          suoi_luong_address:
            "ダナン市、リエンチウ区、ホアヒエップバック町、スイルオン通り",
          nam_o: "ナムオー礁",
          nam_o_title: "ナムオー礁",
          nam_o_title1: "ナムオー礁についてご紹介",
          nam_o_description:
            "ナムオー礁は、ダナン市の中心部から北西に約17km離れた、荒々しく美しい場所です。この場所は、苔むした岩、透明な海水、豊かな海洋生態系で有名です。ナムオー礁は、自然を愛する人々にとって理想的な目的地であるだけでなく、伝統的なナムオーの漁村の文化的な美しさを探索する場所でもあります。",
          nam_o_address: "ダナン市、リエンチウ区、ナムオー1町",
          cho_han: "ハン市場",
          cho_han_title: "ダナンハン市場をそぞろ歩く",
          cho_han_title1: "ハン市場についてご紹介",
          cho_han_description:
            "ダナンハン市場は、ダナン市ハイチャウ区チャンフー通り119番地に位置し、街の象徴的な文化スポットとして広く知られています。多彩なショッピング空間を誇り、衣類や工芸品、生鮮食品、さらには中部地方の名産品まで、あらゆる商品が並びます。賑やかなフードコートでは、クアン麺、バインセオ、ダナン風チェーなど、地元の味覚を存分に楽しむことができます。単なる市場の枠を超え、文化と歴史が交差するこの場所は、訪れる人々に忘れがたい体験を提供し、国内外からの観光客を魅了し続けています。",
          cho_han_address:
            "ダナン市、ハイチャウ区、ハイチャウ1町、チャンフー通り119番地",
          cho_con: "コン市場",
          cho_con_title: "コン市場：ダナンで外せない観光スポット",
          cho_con_title1: "コン市場についてご紹介",
          cho_con_description:
            "コン市場は、ダナン市ハイチャウ区ハイチャウ2丁目318番地に位置し、市内で最も古くて有名な市場の一つです。多様な商品と賑やかな雰囲気で知られ、ここは買い物だけでなく、中部の豊かな食文化を探求するための理想的な目的地でもあります。コン市場では、観光客はバインベオ、ネムルイ、ダナンのチェーなどの魅力的な特産品を楽しむことができ、地元の人々の特徴的なライフスタイルを体験し、思い出に残る瞬間を得ることができます。",
          cho_con_address:
            "ダナン市、ハイチャウ区、ハイチャウ1町、オン・イク・キエム通り318番地",
          bt_cham: "チャム彫刻博物館",
          bt_cham_title: "ユニークなダナンチャム彫刻博物館",
          bt_cham_title1: "チャム彫刻博物館についてご紹介",
          bt_cham_description:
            "ダナンチャム彫刻博物館は、1919年の開館以来、100年以上にわたり古代チャンパ王国の遺産を守り続けている特別な空間です。1915年にフランス人建築家アンリ・パルマンティエの設計により建てられたこの博物館は、幾度も拡張・改修を経て、2011年にはベトナムの博物館ランキングで第1位に輝きました。ここでは、チャンパ王国の芸術と歴史の精髄が凝縮されており、訪れる人々に時を超えた感動と貴重な体験をもたらしてくれるでしょう。",
          bt_cham_address:
            "ダナン市、ハイチャウ区、ビンヒエン町、2月9日通り2番地",
          bt_myThuat: "美術博物館",
          bt_myThuat_title: "ダナン美術博物館",
          bt_myThuat_title1: "ダナン美術博物館についてご紹介",
          bt_myThuat_description:
            "ダナン美術博物館は2014年7月29日に設立され、都市の重要な文化スポットとなっています。独特な建築の現代的なビルに位置し、美術館は芸術作品を展示し、文化交流の空間を作り出し、市民や観光客がベトナムの芸術と文化をより理解できるようにしています。新しく設立されたにもかかわらず、ここはすぐに芸術を愛し、地元文化を探求する人々を惹きつけました。",
          bt_myThuat_address:
            "ダナン市、ハイチャウ区、タクタン町、レ・ズアン通り78番地",
          cau_rong: "ドラゴン橋",
          cau_rong_title: "火と水を噴く「ドラゴン橋」",
          cau_rong_title1: "ドラゴン橋についてご紹介",
          cau_rong_description:
            "ドラゴン橋は、ダナン市ハイチャウ区のグエン・ヴァン・リン通りに位置し、中央ベトナムの海辺の都市を象徴する壮大なランドマークです。この近代的な橋はハン川をまたぎ、黄金の龍が躍動するようなデザインで建設されました。龍の姿は、繁栄と発展の象徴としてダナンの未来を力強く映し出しています。「ドラゴン橋」の最大の魅力は、毎週末に行われる“火と水のショー”です。龍がリアルに炎を噴き上げ、水を吹き出す姿は圧巻の光景で、多くの観光客を魅了しています。この橋は単なる交通インフラにとどまらず、ダナン市の誇りであり、国際的な都市としての力強い躍進を象徴する建造物でもあります。ダナンを訪れるなら、ぜひ夜の「ドラゴン橋」で幻想的なショーを体験してください！",
          cau_rong_address:
            "ダナン市ハイチャウ区のフックニン町、グエン・ヴァン・リン通り",
        },
        districts: {
          select: "地区を選んでください",
          haiChau: "Quận Hai Chau",
          sonTra: "Quận Son Tra",
          nguHanhSon: "Quận Ngu Hanh Son",
          lienChieu: "Quận Lien Chieu",
          camLe: "Quận Cam Le",
          hoaVang: "Huyện Hoa Vang",
          thanhKhe: "Quận Thanh Khe",
        },
        topics: {
          select: "トピックを選んでください",
          stream: "泉",
          pagoda: "お寺",
          beach: "海",
          bridge: "橋",
          museum: "博物館",
          suggest: "おすすめ",
          market: "市場",
          mountain: "名勝",
          village: "伝統工芸村",
          other: "その他",
        },
      },
    },
  },
  lng: savedLanguage, // Ngôn ngữ mặc định
  fallbackLng: "vi",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
