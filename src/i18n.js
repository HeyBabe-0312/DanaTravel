import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const savedLanguage = localStorage.getItem("dana_language") || "vi";

i18n.use(initReactI18next).init({
  resources: {
    vi: {
      translation: {
        copy: "Địa chỉ đã được sao chép!",
        location: {
          title: "Địa chỉ",
        },
        home: "Trang Chủ",
        page: {
          title: "CÁC TRANG",
          1: "Trang chủ",
          2: "Địa điểm",
          3: "Tìm kiếm",
          4: "Gợi ý",
          5: "Liên hệ",
        },
        apps: "ỨNG DỤNG",
        find: {
          title: "TÌM THÊM",
          1: "Anh",
          2: "Mỹ",
          3: "Việt Nam",
          4: "Châu Âu",
          5: "Nhật Bản",
        },
        footer2: "TRANG WEB DU LỊCH TỐT NHẤT CHO VIỆC KHÁM PHÁ ĐÀ NẴNG",
        footer:
          "DanaTravel là một trang web du lịch thông minh, ứng dụng công nghệ AI tiên tiến để giúp người dùng dễ dàng khám phá các địa điểm thông qua hình ảnh. Hiện tại, trang web chỉ tập trung tại thành phố Đà Nẵng, Việt Nam. Dự án này được thực hiện bởi ba sinh viên đại học. Hy vọng bạn sẽ có những trải nghiệm đáng nhớ với DanaTravel! ❤️",
        placeholder2: "Bạn muốn đi đâu?",
        destination: "Tìm kiếm điểm đến của bạn:",
        placeholder: "Nhập tên tại đây...",
        loca: "Địa điểm du lịch",
        holiday: "Hãy tìm kỳ nghỉ lý tưởng của bạn!",
        district: "Tìm theo quận/huyện:",
        topic: "Tìm theo chủ đề:",
        detail: "CHI TIẾT",
        more: "Xem thêm",
        home_title1: "Các địa điểm nổi bật",
        home_title2: "Thông tin thành viên",
        all: "Tìm kiếm",
        no_result: "Không có kết quả tìm kiếm tương thích.",
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
          cau_song_han: "Cầu Sông Hàn",
          cau_song_han_title: "Cầu Sông Hàn - Biểu tượng Đà Nẵng",
          cau_song_han_title1: "Giới thiệu về Cầu Sông Hàn",
          cau_song_han_description:
            "Cầu sông Hàn, tọa lạc tại An Hải Bắc, Sơn Trà, Đà Nẵng, là cây cầu quay đầu tiên và duy nhất tại Việt Nam, được xem là biểu tượng đặc sắc của thành phố biển. Không chỉ đóng vai trò quan trọng trong giao thông, kết nối hai bờ sông Hàn, cầu còn là điểm đến hấp dẫn đối với du khách. Vào ban đêm, cầu sông Hàn quay để mở lối cho tàu thuyền qua lại, tạo nên khung cảnh độc đáo và trải nghiệm khó quên khi khám phá Đà Nẵng.",
          cau_song_han_address: "An Hải Bắc, Quận Sơn Trà, TP. Đà Nẵng",
          bd_son_tra: "Bán đảo Sơn Trà",
          bd_son_tra_title: "Khám phá Bán đảo Sơn Trà",
          bd_son_tra_title1: "Giới thiệu về Bán đảo Sơn Trà",
          bd_son_tra_description: `Bán đảo Sơn Trà là một trong những địa điểm du lịch nổi tiếng và hấp dẫn nhất tại Đà Nẵng, được ví như "lá phổi xanh" của thành phố. Với cảnh quan thiên nhiên hùng vĩ, những bãi biển tuyệt đẹp và hệ sinh thái đa dạng, nơi đây không chỉ thu hút khách du lịch mà còn là điểm đến lý tưởng cho những ai yêu thích khám phá thiên nhiên. Bán đảo Sơn Trà còn mang trong mình những giá trị văn hóa, lịch sử sâu sắc, góp phần tạo nên nét đặc trưng của Đà Nẵng. Hãy cùng tìm hiểu chi tiết hơn về bán đảo tuyệt vời này qua bài viết dưới đây!`,
          bd_son_tra_address:
            "Bán đảo Sơn Trà nằm cách trung tâm thành phố Đà Nẵng khoảng 10km về phía Đông Bắc",
          chua_linh_ung: "Chùa Linh Ứng",
          chua_linh_ung_title: "Khám phá Chùa Linh Ứng Sơn Trà",
          chua_linh_ung_title1: "Giới thiệu về Chùa Linh Ứng",
          chua_linh_ung_description: `Chùa Linh Ứng Sơn Trà, tọa lạc tại bán đảo Sơn Trà, Đà Nẵng, là một trong những điểm đến tâm linh và du lịch nổi tiếng không thể bỏ qua khi bạn ghé thăm thành phố biển xinh đẹp này. Với vị trí đắc địa, kiến trúc độc đáo và bầu không khí thanh tịnh, chùa Linh Ứng không chỉ là nơi linh thiêng để cầu nguyện mà còn là một tuyệt tác giao hòa giữa thiên nhiên và con người.`,
          chua_linh_ung_address:
            "Vườn Lâm Tỳ Ni, Hoàng Sa, Thọ Quang, Quận Sơn Trà, TP. Đà Nẵng",
          bien_my_khe: "Bãi biển Mỹ Khê",
          bien_my_khe_title: "Thiên đường nghỉ dưỡng Bãi biển Mỹ Khê",
          bien_my_khe_title1: "Giới thiệu về Bãi biển Mỹ Khê",
          bien_my_khe_description: `Bãi biển Mỹ Khê là một trong những bãi biển nổi tiếng nhất của Đà Nẵng, được Forbes bình chọn là một trong những bãi biển quyến rũ nhất hành tinh. Với bờ cát trắng mịn, nước biển trong xanh, cùng không gian thiên nhiên yên bình, Mỹ Khê thu hút hàng triệu du khách mỗi năm. Không chỉ là điểm đến lý tưởng để nghỉ dưỡng, bãi biển này còn là nơi diễn ra nhiều hoạt động thể thao dưới nước hấp dẫn và là thiên đường ẩm thực với vô số món ngon đặc sản.`,
          bien_my_khe_address:
            "Bãi biển Mỹ Khê nằm cách trung tâm thành phố Đà Nẵng khoảng 3 km về phía Đông",
          ngu_hanh_son: "Ngũ Hành Sơn",
          ngu_hanh_son_title: "Ngũ Hành Sơn – Tuyệt tác thiên nhiên",
          ngu_hanh_son_title1: "Giới thiệu về Ngũ Hành Sơn",
          ngu_hanh_son_description: `Nằm giữa lòng thành phố Đà Nẵng, Núi Ngũ Hành Sơn là một quần thể danh thắng nổi tiếng gắn liền với vẻ đẹp hùng vĩ của thiên nhiên, sự yên bình của không gian tâm linh và giá trị văn hóa lịch sử lâu đời. Đây là một trong những điểm đến hấp dẫn nhất mà bất cứ du khách nào cũng không nên bỏ lỡ khi ghé thăm thành phố biển xinh đẹp này. Từ đỉnh núi, bạn có thể phóng tầm mắt ngắm nhìn toàn cảnh biển xanh, bầu trời trong vắt và thành phố Đà Nẵng hiện đại, tạo nên một trải nghiệm du lịch khó quên.`,
          ngu_hanh_son_address:
            "81, đường Huyền Trân Công Chúa, Phường Hòa Hải, Quận Ngũ Hành Sơn, cách trung tâm thành phố Đà Nẵng khoảng 8km về phía Đông Nam",
          nha_dao_nguoc: "Nhà Đảo Ngược",
          nha_dao_nguoc_title: "Nhà Đảo Ngược – Thiên Đường Sống Ảo Độc Đáo",
          nha_dao_nguoc_title1: "Giới thiệu về Nhà Đảo Ngược Đà Nẵng",
          nha_dao_nguoc_description: `Nhà đảo ngược Đà Nẵng nằm tại 44 Hồ Xuân Hương, quận Ngũ Hành Sơn không chỉ là một điểm đến độc đáo mà còn là địa điểm check-in đầy ấn tượng với thiết kế đảo ngược thú vị. Công trình này thu hút đông đảo du khách và giới trẻ nhờ không gian sáng tạo, với mọi đồ vật và kiến trúc đều được sắp xếp lộn ngược đầy bất ngờ. Tọa lạc giữa lòng thành phố biển xinh đẹp, nơi đây còn gần các bãi biển nổi tiếng như Mỹ Khê, mang lại trải nghiệm thú vị và trọn vẹn cho hành trình khám phá Đà Nẵng.`,
          nha_dao_nguoc_address:
            "44 Hồ Xuân Hương, Phường Khuê Mỹ, Quận Ngũ Hành Sơn, TP. Đà Nẵng",
          bien_non_nuoc: "Bãi biển Non Nước",
          bien_non_nuoc_title:
            "Bãi biển Non Nước – Viên Ngọc Xanh Giữa Lòng Đà Nẵng",
          bien_non_nuoc_title1: "Giới thiệu về Bãi biển Non Nước",
          bien_non_nuoc_description: `Bãi biển Non Nước là một trong những điểm đến nổi bật và hấp dẫn nhất tại thành phố Đà Nẵng. Nằm dưới chân dãy núi Ngũ Hành Sơn hùng vĩ, Biển Non Nước không chỉ thu hút du khách bởi vẻ đẹp thiên nhiên hoang sơ, mà còn bởi không gian yên bình, trong lành và các dịch vụ du lịch chất lượng cao.`,
          bien_non_nuoc_address:
            "Bãi biển Non Nước nằm cách trung tâm thành phố Đà Nẵng khoảng 8km về phía đông nam",
          bt_dieu_khac: "Bảo tàng Ký Ức Điêu Khắc",
          bt_dieu_khac_title: "Bảo tàng Ký Ức Điêu Khắc Đà Nẵng",
          bt_dieu_khac_title1: "Giới thiệu về Bảo tàng Ký Ức Điêu Khắc",
          bt_dieu_khac_description:
            "Nằm tại chân núi Ngũ Hành Sơn hùng vĩ, Làng Bảo tàng Ký ức Điêu khắc Đá Mỹ Nghệ Ngũ Hành Sơn không chỉ là một địa điểm du lịch, mà còn là biểu tượng văn hóa đặc sắc của làng nghề truyền thống Việt Nam. Bảo tàng không chỉ kể câu chuyện về nghệ thuật điêu khắc mà còn là nơi lưu giữ những ký ức lịch sử, giá trị văn hóa từ hàng trăm năm qua, gắn liền với sự hình thành và phát triển của làng nghề Non Nước.",
          bt_dieu_khac_address: "Nằm tại chân núi Ngũ Hành Sơn",
          lang_chieu_cam_ne: "Làng Chiếu Cẩm Nê",
          lang_chieu_cam_ne_title:
            "Làng Chiếu Cẩm Nê – Nét Đẹp Làng Nghề Truyền Thống",
          lang_chieu_cam_ne_title1: "Giới thiệu về Làng Chiếu Cẩm Nê",
          lang_chieu_cam_ne_description:
            "Làng chiếu Cẩm Nê là một trong những làng nghề truyền thống lâu đời nằm tại xã Hòa Tiến, huyện Hòa Vang, thành phố Đà Nẵng. Từ thế kỷ XV, làng đã nổi tiếng với nghề dệt chiếu thủ công mang đậm bản sắc văn hóa dân tộc. Trải qua bao thăng trầm của lịch sử, làng Cẩm Nê vẫn lưu giữ được nghệ thuật dệt chiếu tinh xảo và trở thành một điểm đến du lịch hấp dẫn, nơi du khách có thể tìm hiểu về làng nghề truyền thống và cảm nhận cái hồn mộc mạc của vùng đất miền Trung.",
          lang_chieu_cam_ne_address:
            "Nằm tại xã Hòa Tiến, huyện Hòa Vang, thành phố Đà Nẵng",
          nui_than_tai: "Khu Du Lịch Núi Thần Tài",
          nui_than_tai_title:
            "Suối Khoáng Nóng Thần Tài – Thiên Đường Nghỉ Dưỡng",
          nui_than_tai_title1: "Giới thiệu về Khu Du Lịch Núi Thần Tài",
          nui_than_tai_description: `Suối Khoáng Nóng Thần Tài là một trong những điểm du lịch nghỉ dưỡng nổi bật nhất tại Đà Nẵng. Với sự kết hợp độc đáo giữa thiên nhiên hoang sơ và các dịch vụ hiện đại, nơi đây mang đến một trải nghiệm tuyệt vời cho mọi lứa tuổi. Nằm giữa núi rừng xanh mướt, Suối Khoáng Nóng Thần Tài được xem là "liều thuốc" hoàn hảo để thư giãn và tái tạo năng lượng, giúp du khách tận hưởng khoảnh khắc nghỉ ngơi trọn vẹn. Không chỉ là nơi giúp bạn tìm lại sự thư thái, suối khoáng nóng còn mang đến nhiều lợi ích về sức khỏe, khiến nơi đây trở thành điểm đến lý tưởng cho cả gia đình và nhóm bạn.`,
          nui_than_tai_address:
            "Nằm tại xã Hòa Phú, huyện Hòa Vang, cách trung tâm Đà Nẵng khoảng 30km về phía Tây Nam",
          suoi_hoa: "Suối Hoa",
          suoi_hoa_title: "Khu Du Lịch Sinh Thái Suối Hoa",
          suoi_hoa_title1: "Giới thiệu về Suối Hoa",
          suoi_hoa_description: `Khu du lịch sinh thái Suối Hoa không chỉ đơn thuần là một điểm đến tham quan, mà còn là một hành trình tìm về với những giá trị nguyên sơ của thiên nhiên, một bản giao hưởng xanh mát xoa dịu tâm hồn giữa nhịp sống hối hả của Đà Nẵng. Nơi đây, vẻ đẹp hùng vĩ của núi non hòa quyện cùng sự mềm mại, uyển chuyển của dòng suối, tạo nên một bức tranh thủy mặc sống động và đầy quyến rũ.`,
          suoi_hoa_address:
            "Nằm ở vùng ngoại ô phía Tây của thành phố Đà Nẵng, thuộc địa phận huyện Hòa Vang",
          suoi_mo: "Suối Mơ",
          suoi_mo_title: "Suối Mơ – Thiên Đường Giữa Núi Rừng Xanh Mát",
          suoi_mo_title1: "Giới thiệu về Suối Mơ",
          suoi_mo_description: `Suối Mơ là một trong những điểm đến nổi bật của Đà Nẵng, thu hút du khách bởi vẻ đẹp nguyên sơ, kỳ vĩ và thơ mộng. Giữa những ngày hè oi ả, nơi đây trở thành điểm dừng chân lý tưởng để tận hưởng bầu không khí trong lành, lắng nghe tiếng suối róc rách và hòa mình vào khung cảnh thiên nhiên yên bình. Nếu bạn đang tìm kiếm một địa điểm tránh xa sự xô bồ của phố thị để thư giãn và nạp lại năng lượng, Suối Mơ chính là lựa chọn hoàn hảo.`,
          suoi_mo_address:
            "Nằm tại xã Hòa Ninh, huyện Hòa Vang, cách trung tâm thành phố Đà Nẵng khoảng 20km về phía Tây Bắc",
          ba_na: "Bà Nà Hills",
          ba_na_title:
            "Bà Nà Hills – Nơi Giao Thoa Giữa Vẻ Đẹp Thiên Nhiên và Kiến Trúc Kỳ Vĩ",
          ba_na_title1: "Giới thiệu về Bà Nà Hills",
          ba_na_description: `Bà Nà Hills, điểm đến đầy sức quyến rũ được mệnh danh là “nơi giao thoa giữa trời và đất”, là một trong những biểu tượng của thành phố Đà Nẵng. Đây không chỉ là một điểm nghỉ dưỡng mà còn là hành trình để khám phá vẻ đẹp thiên nhiên kết hợp hoàn hảo với sự kỳ công của con người. Được bao phủ bởi khung cảnh núi rừng hùng vĩ, khí hậu dễ chịu và những công trình kiến trúc độc đáo, Bà Nà Hills mang đến trải nghiệm không nơi nào sánh được. Tại đây, du khách như lạc vào một thế giới khác, nơi mọi áp lực và bộn bề của cuộc sống thường nhật dường như tan biến.`,
          ba_na_address:
            "Tọa lạc tại xã Hòa Ninh, huyện Hòa Vang, nằm cách trung tâm Đà Nẵng khoảng 25km về phía Tây Nam",
          cau_tinh_yeu: "Cầu Tình Yêu",
          cau_tinh_yeu_title:
            "CẦU TÌNH YÊU - ĐIỂM ĐẾN LÃNG MẠN CHO TÌNH YÊU ĐÔI LỨA",
          cau_tinh_yeu_title1: "Giới thiệu về Cầu Tình Yêu",
          cau_tinh_yeu_description: `Đà Nẵng không chỉ nổi tiếng với những bãi biển dài xanh mát, những cây cầu độc đáo mà còn có một điểm đến mang đậm dấu ấn lãng mạn – Cầu Tình Yêu. Đây là nơi lưu giữ những khoảnh khắc đẹp của các cặp đôi, biểu tượng cho tình yêu vĩnh cửu và cũng là một địa điểm check-in tuyệt vời cho du khách khi đến với thành phố biển xinh đẹp này.`,
          cau_tinh_yeu_address:
            "Tọa lạc tại bờ Đông của sông Hàn, trên đường Trần Hưng Đạo, quận Sơn Trà, TP. Đà Nẵng",
          cay_da: "Cây Đa Ngàn Năm",
          cay_da_title:
            "Cây Đa Ngàn Năm – Điểm Đến Khám Phá Thiên Nhiên Kỳ Thú",
          cay_da_title1: "Giới thiệu về Cây Đa Ngàn Năm",
          cay_da_description: `Cây Đa Ngàn Năm tại bán đảo Sơn Trà, Đà Nẵng, là một kỳ quan tự nhiên đầy ấn tượng, thu hút du khách bởi vẻ đẹp hoang sơ và tuổi đời hàng ngàn năm. Với thân cây khổng lồ cùng tán lá rộng, cây đa này tượng trưng cho sức sống mãnh liệt của rừng núi Sơn Trà. Đây không chỉ là một biểu tượng thiên nhiên kỳ vĩ mà còn mang ý nghĩa tâm linh sâu sắc đối với người dân địa phương. Du khách đến đây có cơ hội hòa mình vào không gian xanh mát, lắng nghe tiếng chim hót và tận hưởng sự yên bình của núi rừng. Bên cạnh việc chiêm ngưỡng cây đa, bạn còn có thể khám phá các cung đường tuyệt đẹp trên bán đảo Sơn Trà, nơi giao thoa giữa biển cả và núi rừng, tạo nên những trải nghiệm khó quên.`,
          cay_da_address: "Cây Đa Ngàn Năm tại bán đảo Sơn Trà, Đà Nẵng",
          ca_chep: "Cá Chép Hóa Rồng",
          ca_chep_title:
            "Tượng Cá Chép Hóa Rồng – Biểu Tượng Vẻ Đẹp Và Thịnh Vượng",
          ca_chep_title1: "Giới thiệu về Tượng Cá Chép Hóa Rồng",
          ca_chep_description: `Đà Nẵng – thành phố biển xinh đẹp không chỉ nổi tiếng với những cây cầu độc đáo, bãi biển trong xanh mà còn có nhiều biểu tượng mang ý nghĩa sâu sắc. Một trong số đó chính là Tượng Cá Chép Hóa Rồng, công trình mang đậm giá trị văn hóa, tín ngưỡng và là điểm đến không thể bỏ qua khi du lịch Đà Nẵng.`,
          ca_chep_address:
            "Tọa lạc bên bờ Đông sông Hàn, ngay khu vực cầu Tình Yêu",
        },
        districts: {
          select: "Chọn khu vực",
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
          mountain: "Núi",
          village: "Làng nghề",
          other: "Khác",
        },
      },
    },
    ja: {
      translation: {
        copy: "住所がコピーされました！",
        location: {
          title: "住所",
        },
        home: "ホーム",
        loca: "観光地",
        footer:
          "DanaTravel は、AI技術を活用したスマートな旅行ウェブサイトで、ユーザーが画像を通じて簡単に観光地を発見できるようサポートします。現在、このウェブサイトはベトナムのダナン市に特化しています。このプロジェクトは大学生3人によって実現されました。DanaTravelで素晴らしい体験をお楽しみください！❤️",
        footer2: "ダナン旅行に最適な旅行ウェブサイト",
        page: {
          title: "ページ",
          1: "ホーム",
          2: "観光地",
          3: "検索",
          4: "おすすめ",
          5: "お問い合わせ",
        },
        apps: "関連アプリ",
        find: {
          title: "その他",
          1: "イギリス",
          2: "アメリカ",
          3: "ベトナム",
          4: "ヨーロッパ",
          5: "日本",
        },
        placeholder: "ここに名前を入力... ",
        placeholder2: "どこへ行きたいですか？",
        destination: "目的地を検索：",
        district: "地区で検索：",
        topic: "トピックで検索：",
        more: "さらに表示",
        holiday: "理想の休暇を見つけよう！ ",
        detail: "もっと見る",
        guide: "旅行ガイド",
        home_title1: "注目の観光地",
        home_title2: "チーム構成",
        all: "検索",
        no_result: "一致する検索結果が見つかりませんでした。",
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
          cau_song_han: "ハン橋",
          cau_song_han_title: "ハン橋 - ダナン市の象徴",
          cau_song_han_title1: "ハン橋についてご紹介",
          cau_song_han_description:
            "ハン橋は、ダナンのソンチャ区、アンハイバクに位置するベトナムで初めてかつ唯一の回転橋であり、海の街ダナンの特異な象徴と見なされています。交通において重要な役割を果たすだけでなく、ハンの両岸を結び、観光客にとって魅力的な目的地でもあります。夜になると、ハン橋は船の通行のために回転し、ダナンを探索する際の独特な景観と忘れられない体験を生み出します。",
          cau_song_han_address: "ダナン市、ソンチャ区、アンハイバク",
          bd_son_tra: "ソンチャ半島",
          bd_son_tra_title: "ソンチャ半島を探検",
          bd_son_tra_title1: "ソンチャ半島についてご紹介",
          bd_son_tra_description:
            "ソンチャ半島は、ダナンで最も有名で魅力的な観光地の一つであり、「街の緑の肺」とも称されています。壮大な自然景観、息をのむほど美しいビーチ、多様な生態系を誇るこの地は、観光客を魅了するだけでなく、自然探索を愛する人々にとっても理想的な目的地です。さらに、ソンチャ半島は、深い歴史や文化的価値を秘めており、ダナンの独自の魅力を形作る要素の一つでもあります。この素晴らしい半島について、詳しくご紹介していきましょう！",
          bd_son_tra_address: "ソンチャ半島は、ダナン市中心部から約10km北東",
          chua_linh_ung: "リンウング寺",
          chua_linh_ung_title: "ソンチャーのリンウング寺",
          chua_linh_ung_title1: "リンウング寺についてご紹介",
          chua_linh_ung_description: `ソンチャーのリンウング寺は、ダナンのソントラ半島に位置し、この美しい海辺の街を訪れる際に見逃せない精神的および観光の名所の一つです。絶好のロケーション、独特の建築、そして静かな雰囲気を持つリンウング寺は、祈りの場であるだけでなく、自然と人間の調和の素晴らしい作品でもあります。`,
          chua_linh_ung_address: "ダナン市、ソントラ、ホアンザ、ラムティニ庭園",
          bien_my_khe: "ミーケービーチ",
          bien_my_khe_title: "ミーケービーチ",
          bien_my_khe_title1: "ミーケービーチについてご紹介",
          bien_my_khe_description: `ミーケービーチはダナンで最も有名なビーチの一つで、フォーブスにより「世界で最も魅力的なビーチの一つ」と評価されています。白い砂浜、透き通った海、穏やかな自然環境で、毎年何百万もの観光客を惹きつけています。休養の理想的な場所であるだけでなく、このビーチは多くの魅力的なウォーターアクティビティが行われる場所であり、美味しい地元料理が楽しめるグルメの楽園でもあります。`,
          bien_my_khe_address:
            "ミーケービーチはダナン市の中心から東へ約3kmの距離にあります",
          ngu_hanh_son: "五行山",
          ngu_hanh_son_title: "五行山: ダナンの自然と精神の傑作",
          ngu_hanh_son_title1: "五行山:についてご紹介",
          ngu_hanh_son_description: `ダナン市の中心に位置する五行山は、自然の壮大な美しさ、精神的な空間の平穏、そして長い歴史的文化的価値が結びついた有名な観光地です。美しい海の街を訪れる際に、どの旅行者も見逃すべきではない魅力的なスポットの一つです。山の頂上からは、青い海、澄みきった空、そして近代的なダナン市の全景を一望することができ、忘れられない旅行体験をもたらしてくれます。`,
          ngu_hanh_son_address:
            "ダナン市の中心から約8km東南に位置するホアハイ区の81番地、フエンチャン・コンチュア通り",
          nha_dao_nguoc: "逆さまの家",
          nha_dao_nguoc_title: "逆さまの家を探索 – 独特な夢のような場所",
          nha_dao_nguoc_title1: "逆さまの家についてご紹介",
          nha_dao_nguoc_description: `ダナンの建築の家は、クアンナム省ゴクハンソン区の44ホー・スアン・フオン通りに位置しており、独特なスポットであるとともに、面白い逆さまのデザインで印象的な写真スポットでもあります。この建物は、すべての家具と建築が逆さまに配置されており、訪れる人々に驚きと楽しさを提供しています。美しい海辺の都市ダナンの中心に位置し、有名なビーチ（ミーケービーチ）にも近く、ダナンの探索旅行において素晴らしい体験を提供してくれます。`,
          nha_dao_nguoc_address:
            "ダナン市、クアンナム省、ゴクハンソン区、44ホー・スアン・フオン通り",
          bien_non_nuoc: "ノンヌオックビーチ",
          bien_non_nuoc_title:
            "ノンヌオックビーチ - ダナンの中心にある青い宝石",
          bien_non_nuoc_title1: "ノンヌオックビーチについてご紹介",
          bien_non_nuoc_description: `ノンヌオックビーチは、ダナン市で最も目立つ魅力的な観光地の一つです。壮大な五行山のふもとに位置し、ノンヌオックビーチは自然の美しさだけでなく、静かで清らかな空間と高品質な観光サービスでも観光客を惹きつけています。`,
          bien_non_nuoc_address:
            "ノンヌオックビーチは、ダナン市の中心から南東に約8キロメートルの距離にあります",
          bt_dieu_khac: "彫刻博物館",
          bt_dieu_khac_title: "ダナン彫刻博物館",
          bt_dieu_khac_title1: "彫刻博物館についてご紹介",
          bt_dieu_khac_description:
            "壮大な五行山の麓に位置する五行山彫刻美術記念博物館は、観光地であるだけでなく、ベトナムの伝統的な職人村の独特な文化の象徴でもあります。この博物館は、彫刻芸術の物語を語るだけでなく、何世代にもわたる歴史的記憶と文化的価値を保存する場所でもあり、ノンヌック村の形成と発展に密接に関連しています。",
          bt_dieu_khac_address: "五行山の麓に位置する",
          lang_chieu_cam_ne: "カムネマット村",
          lang_chieu_cam_ne_title: "カムネマット村 – 伝統的な手工芸村の美しさ",
          lang_chieu_cam_ne_title1: "カムネマット村についてご紹介",
          lang_chieu_cam_ne_description:
            "カムネマット村は、ダナン市ホアヴァン郡ホアティエンコミューンに位置する、長い歴史を持つ伝統的な手工芸村の一つです。15世紀から、この村は民族文化を色濃く反映した手織りのマット作りで有名でした。歴史の浮き沈みを経て、カムネ村は精巧なマット織りの技術を今も守り続け、伝統的な手工芸村を学び、ベトナム中部の素朴な雰囲気を感じることができる魅力的な観光地となっています。",
          lang_chieu_cam_ne_address:
            "ダナン市、ホアヴァン郡、ホアティエンコミューンに位置する",
          nui_than_tai: "NUI THAN TAI ホットスプリングパーク",
          nui_than_tai_title:
            "NUI THAN TAI ホットスプリングパーク - リラックスと体験の楽園",
          nui_than_tai_title1:
            "NUI THAN TAI ホットスプリングパークについてご紹介",
          nui_than_tai_description: `NUI THAN TAI ホットスプリングパークは、ダナンで最も注目すべきリゾート地の一つです。手つかずの自然と現代的なサービスが見事に融合し、すべての年齢層の旅行者に素晴らしい体験を提供しています。緑豊かな山々の中に位置し、NUI THAN TAI ホットスプリングパークは、リラックスとエネルギー回復に最適な「薬」のような場所とされています。ここでは、忙しい都市生活から解放され、自然の中でリラックスしたひとときを過ごすことができます。また、温泉は健康にも良い影響を与えるため、家族や友人との訪問に最適なスポットです。`,
          nui_than_tai_address:
            "ダナン市、ホアヴァン郡、ホアフー村に位置しており、ダナン市中心部から約30km南西にあります",
          suoi_hoa: "ホア渓流",
          suoi_hoa_title: "ホア渓流エコツーリズム",
          suoi_hoa_title1: "ホア渓流についてご紹介",
          suoi_hoa_description: `ホア渓流エコツーリズム地は、単なる観光地にとどまらず、自然の原始的な価値を感じる旅の始まりであり、ダナンの忙しい日常生活の中で心を癒す緑の交響曲です。ここでは、壮大な山々の美しさが、流れる川のやわらかさと調和し、生き生きとした美しい水墨画のような景観が広がります。`,
          suoi_hoa_address:
            "ダナン市の西部に位置するホアヴァン郡の郊外にあります",
          suoi_mo: "モー渓流",
          suoi_mo_title: "モー渓流 – 緑豊かな山林の中の楽園",
          suoi_mo_title1: "モー渓流についてご紹介",
          suoi_mo_description: `モー渓流はダナンの注目すべき観光地の一つで、手つかずの壮大で詩的な美しさで訪れる人々を魅了します。暑い夏の日には、ここは新鮮な空気を楽しみ、小川のせせらぎを聞きながら、穏やかな自然の風景の中に身を浸すのに理想的な場所となります。都会の喧騒から離れてリラックスし、エネルギーを取り戻したい方には、モー渓流は完璧な選択肢です。`,
          suoi_mo_address:
            "ホアニン村、ホアヴァン郡に位置し、ダナン市中心部から約20キロメートル北西にあります",
          ba_na: "バーナーヒルズ",
          ba_na_title: "バーナーヒルズ – 自然の美しさと壮大な建築の交差点",
          ba_na_title1: "バーナーヒルズについてご紹介",
          ba_na_description: `バーナーヒルズは、「天と地が交わる場所」と称され、ダナン市の象徴的な観光地の一つであり、魅力に満ちた場所です。ここはただのリゾート地ではなく、人間の巧妙さと自然の美しさが完璧に融合した場所として探索の旅を提供します。壮大な山々に囲まれ、快適な気候と独特な建築物に包まれたバーナーヒルズは、他のどこにもない体験を提供してくれます。ここでは、日常の忙しさやストレスが消え去り、まるで異世界に迷い込んだかのような感覚を味わえます。`,
          ba_na_address:
            "ダナン市の中心部から南西に約25kmの位置にあるホアニン村、ホアヴァン郡にあります。",
          cau_tinh_yeu: "愛の桟橋",
          cau_tinh_yeu_title: "愛の桟橋 - カップルにとってロマンチックな目的地",
          cau_tinh_yeu_title1: "愛の桟橋についてご紹介",
          cau_tinh_yeu_description: `ダナンは、青く広がる長いビーチやユニークな橋で有名ですが、その中でも特にロマンチックな印象を残す場所があります。それが「愛の桟橋」です。この場所は、カップルたちの美しい瞬間を刻む場所であり、永遠の愛を象徴するスポットとして知られています。また、美しい海辺の都市ダナンを訪れる観光客にとって、とても魅力的な写真撮影スポットでもあります。`,
          cau_tinh_yeu_address:
            "ハン川の東岸に位置し、ソンチャ区のチャンフンダオ通り",
          cay_da: "千年のバニヤンツリー",
          cay_da_title: "千年のバニヤンツリー - 自然の驚異を探求する目的地",
          cay_da_title1: "千年のバニヤンツリーについてご紹介",
          cay_da_description: `ダナンのソンチャ半島にある千年のバニヤンツリーは、印象的な自然の驚異であり、その原始的な美しさと数千年の歴史で観光客を惹きつけています。巨大な幹と広い葉の冠を持つこのバニヤンツリーは、ソンチャの山々の強い生命力を象徴しています。これは壮大な自然の象徴であるだけでなく、地元の人々にとって深い精神的な意味も持っています。ここを訪れる観光客は、涼しい緑の空間に身を浸し、鳥のさえずりを聞き、山の静けさを楽しむ機会があります。バニヤンツリーを鑑賞するだけでなく、海と山が交わるソンチャ半島の美しい道を探索し、忘れられない体験をすることもできます。`,
          cay_da_address: "ソンチャ半島にある千年のバニヤンツリー",
          ca_chep: "鯉の登竜像",
          ca_chep_title: "鯉の登竜像 – 美しさと繁栄の象徴",
          ca_chep_title1: "鯉の登竜像についてご紹介",
          ca_chep_description: `美しい海辺の都市ダナンは、ユニークな橋や青い海で有名ですが、深い意味を持つ象徴的な建造物も多く存在します。その中でも特に注目されるのが「鯉の登竜像」です。この建造物は文化的・宗教的価値を強く反映しており、ダナン旅行の際に見逃せないスポットとなっています。`,
          ca_chep_address: "鯉の登竜像は、ハン川の東岸、愛の桟橋の近く",
        },
        districts: {
          select: "地区を選んでください",
          haiChau: "ハイチャウ区",
          sonTra: "ソントラ区",
          nguHanhSon: "グーハインソン区",
          lienChieu: "リエンチュウ区",
          camLe: "カムレ区",
          hoaVang: "ホアヴァン郡",
          thanhKhe: "タインケー区",
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
          mountain: "山",
          village: "工芸村",
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
