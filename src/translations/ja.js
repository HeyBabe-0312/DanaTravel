// Japanese translations
const jaTranslations = {
  translation: {
    showMore: "もっと見る",
    hide: "隠す",
    settings: {
      title: "アカウント設定",
      subtitle: "アカウント情報とセキュリティを管理する",
      profileTab: "プロフィール",
      securityTab: "セキュリティ",
      email: "メールアドレス",
      displayName: "表示名",
      enterDisplayName: "表示名を入力してください",
      currentPassword: "現在のパスワード",
      enterCurrentPassword: "現在のパスワードを入力してください",
      newPassword: "新しいパスワード",
      enterNewPassword: "新しいパスワードを入力してください",
      confirmPassword: "パスワードの確認",
      confirmNewPassword: "新しいパスワードを再入力してください",
      saveChanges: "変更を保存",
      updatePassword: "パスワードを更新",
      profilePicture: "プロフィール画像",
      passwordRequirements: "パスワード要件：",
      minChars: "8文字以上",
      upperCase: "大文字を1つ以上",
      number: "数字を1つ以上",
      profileUpdateSuccess: "プロフィールが正常に更新されました！",
      profileUpdateError: "プロフィールの更新中にエラーが発生しました。",
      passwordUpdateSuccess: "パスワードが正常に更新されました！",
      passwordUpdateError: "パスワードの更新中にエラーが発生しました。",
      currentPasswordIncorrect: "現在のパスワードが正しくありません。",
      fillAllFields: "すべてのフィールドに入力してください。",
      passwordTooShort: "パスワードが短すぎます（最低8文字必要）。",
      passwordsDoNotMatch: "新しいパスワードと確認用パスワードが一致しません。",
      errorFetchingUser: "ユーザー情報の取得中にエラーが発生しました。",
      imageTypeError: "画像ファイルのみ許可されています。",
      imageSizeError: "画像サイズは5MB以下にしてください。",
      imageUploadError:
        "プロフィール画像のアップロード中にエラーが発生しました。",
      imageUploadSuccess: "プロフィール画像を正常にアップロードしました！",
    },
    auth: {
      signIn: "ログイン",
      signUp: "登録",
      signingIn: "ログイン中...",
      signingUp: "登録中...",
      email: "メールアドレス",
      password: "パスワード",
      displayName: "表示名",
      enterEmail: "メールアドレスを入力してください",
      enterPassword: "パスワードを入力してください",
      enterDisplayName: "表示名を入力してください",
      confirmPassword: "パスワードの確認",
      enterConfirmPassword: "パスワードを再入力してください",
      loginSuccess: "ログインに成功しました！",
      loginFailed: "ログインに失敗しました。",
      registerSuccess: "登録に成功しました！",
      registerFailed: "登録に失敗しました。",
      fillAllFields: "すべてのフィールドに入力してください。",
      invalidEmail: "無効なメールアドレスです。",
      passwordTooShort: "パスワードが短すぎます（最低6文字必要）。",
      passwordsDoNotMatch: "パスワードが一致しません。",
      signinWelcomeText:
        "ダナン市の観光スポットを探索するための旅行ウェブサイトです。ログインして、みんなと一緒にレビューに参加し、交流しましょう。",
      signupWelcomeText:
        "ダナン市の観光スポットを探索するための旅行ウェブサイトです。DanaTravelの素晴らしい体験をお楽しみください。",
      logout: "ログアウト",
      logoutConfirmation: {
        title: "ログアウトの確認",
        message: "本当にログアウトしますか？",
        cancel: "キャンセル",
        confirm: "ログアウト",
      },
      logoutSuccess: "ログアウトに成功しました！",
    },
    copy: "住所がコピーされました！",
    location: {
      title: "住所",
    },
    result: {
      yes: "件の場所が見つかりました！",
      no: "該当する場所が見つかりませんでした！",
    },
    home: "ホーム",
    loca: "観光地",
    footer:
      "DanaTravel は、ユーザーがダナン市内の有名な観光地を簡単に探索できる旅行検索サイトです。このプロジェクトは、ダナン外国語大学とダナン工科大学の学生 3名による共同研究として実施された科学研究の成果です。DanaTravel で素晴らしい体験をお楽しみください！❤️",
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
    book: "予約一覧",
    signIn: "ログイン",
    signUp: "登録",
    logout: "ログアウト",
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
    bookTitle: "あなたの旅行体験をご予約ください",
    bookDesc: "ダナンの素敵なスポットを発見して予約しよう",
    numberPeople: "人数",
    bookNow: "部屋を選択",
    hotels: {
      title1: "メリア ヴインパール ダナン リバーフロント",
      location1: "アン・ハイ・バク区, ダナン",
      price1: "11,318円",
      title2: "ダナン – ミカヅキ JAPANESE RESORTS & SPA",
      location2: "ホア・ヒエップ・ナム区, ダナン",
      price2: "14,394円",
      title3: "シーショアホテル＆アパートメント – 海辺で理想的なバカンス",
      location3: "マン・タイ区, ダナン",
      price3: "4,372円",
      title4: "TIA ウェルネスリゾート - スパ込み",
      location4: "クエ・ミー区, ダナン",
      price4: "53,324円",
      title5:
        "インターコンチネンタルホテルダナンサンペニンシュラリゾート、IHGホテル",
      location5: "トー・クオン区, ダナン",
      price5: "76,809円",
      title6: "マキシミラン・ダナン・ビーチ・ホテル",
      location6: "フオック・ミー区, ダナン",
      price6: "7,057円",
    },
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
      bt_cham_address: "ダナン市、ハイチャウ区、ビンヒエン町、2月9日通り2番地",
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
        "ドラゴン橋は、ダナン市ハイチャウ区のグエン・ヴァン・リン通りに位置し、中央ベトナムの海辺の都市を象徴する壮大なランドマークです。この近代的な橋はハン川をまたぎ、黄金の龍が躍動するようなデザインで建設されました。龍の姿は、繁栄と発展の象徴としてダナンの未来を力強く映し出しています。「ドラゴン橋」の最大の魅力は、毎週末に行われる「火と水のショー」です。龍がリアルに炎を噴き上げ、水を吹き出す姿は圧巻の光景で、多くの観光客を魅了しています。この橋は単なる交通インフラにとどまらず、ダナン市の誇りであり、国際的な都市としての力強い躍進を象徴する建造物でもあります。ダナンを訪れるなら、ぜひ夜の「ドラゴン橋」で幻想的なショーを体験してください！",
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
      bien_non_nuoc_title: "ノンヌオックビーチ - ダナンの中心にある青い宝石",
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
      nui_than_tai_title1: "NUI THAN TAI ホットスプリングパークについてご紹介",
      nui_than_tai_description: `NUI THAN TAI ホットスプリングパークは、ダナンで最も注目すべきリゾート地の一つです。手つかずの自然と現代的なサービスが見事に融合し、すべての年齢層の旅行者に素晴らしい体験を提供しています。緑豊かな山々の中に位置し、NUI THAN TAI ホットスプリングパークは、リラックスとエネルギー回復に最適な「薬」のような場所とされています。ここでは、忙しい都市生活から解放され、自然の中でリラックスしたひとときを過ごすことができます。また、温泉は健康にも良い影響を与えるため、家族や友人との訪問に最適なスポットです。`,
      nui_than_tai_address:
        "ダナン市、ホアヴァン郡、ホアフー村に位置しており、ダナン市中心部から約30km南西にあります",
      suoi_hoa: "ホア渓流",
      suoi_hoa_title: "ホア渓流エコツーリズム",
      suoi_hoa_title1: "ホア渓流についてご紹介",
      suoi_hoa_description: `ホア渓流エコツーリズム地は、単なる観光地にとどまらず、自然の原始的な価値を感じる旅の始まりであり、ダナンの忙しい日常生活の中で心を癒す緑の交響曲です。ここでは、壮大な山々の美しさが、流れる川のやわらかさと調和し、生き生きとした美しい水墨画のような景観が広がります。`,
      suoi_hoa_address: "ダナン市の西部に位置するホアヴァン郡の郊外にあります",
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
      hoangSa: "ホアンサ郡",
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
    // Added logout confirmation modal translations
    logoutConfirmation: {
      title: "ログアウト確認",
      message: "本当にログアウトしますか？",
      confirm: "ログアウト",
      cancel: "キャンセル",
    },
    // Reviews translations
    reviews: {
      form: {
        writeReview: "レビューを書く",
        shareExperience: "他の旅行者と体験を共有してください",
        rating: "評価",
        reviewTitle: "レビュータイトル",
        summarizeExperience: "体験を要約してください",
        yourReview: "あなたのレビュー",
        tellUsExperience: "体験について教えてください...",
        submitReview: "レビューを送信",
        submitting: "送信中...",
        updating: "更新中...",
        pleaseSelectRating: "評価を選択してください",
        titleRequired: "タイトルは必須です",
        descriptionRequired: "説明は必須です",
        stars: "星",
      },
      list: {
        anonymousUser: "匿名ユーザー",
        loadingReviews: "レビューを読み込み中...",
        noReviewsYet: "まだレビューがありません",
        beFirstToShare: "最初に体験を共有してください！",
        pleaseLoginToLike: "レビューにいいねするにはログインしてください",
        pleaseLoginToDislike: "レビューに悪いねするにはログインしてください",
        like: "いいね",
        unlike: "いいね取消",
        dislike: "悪いね",
        removeDislike: "悪いね取消",
        edit: "編集",
        delete: "削除",
        editReview: "レビューを編集",
        deleteReview: "レビューを削除",
        confirmDelete: "削除の確認",
        deleteConfirmMessage:
          "このレビューを削除してもよろしいですか？この操作は元に戻せません。",
        confirmDeleteButton: "削除",
        cancelDelete: "キャンセル",
        updating: "更新中...",
        deleting: "削除中...",
        options: "オプション",
      },
      locationReviews: {
        reviewsRatings: "レビュー＆評価",
        ratingDistribution: "評価分布",
        reviews: "レビュー",
        cancel: "キャンセル",
        pleaseLoginToWrite: "レビューを書くにはログインしてください",
        failedToLoad: "レビューの読み込みに失敗しました",
        tryAgain: "再試行",
        noRating: "評価なし",
      },
      pagination: {
        previous: "前へ",
        next: "次へ",
        previousPage: "前のページ",
        nextPage: "次のページ",
        page: "ページ",
        of: "の",
        showing: "表示中",
        to: "から",
        results: "件",
      },
      errors: {
        loadingReviews: "レビューの読み込みエラー",
        submittingReview: "レビューの送信エラー",
        updatingReview: "レビューの更新エラー",
        deletingReview: "レビューの削除エラー",
        updatingLike: "いいねの更新エラー",
        updatingDislike: "悪いねの更新エラー",
        somethingWentWrong: "問題が発生しました",
        tryAgainLater: "後でもう一度お試しください",
      },
    },
    profile: {
      updateSuccess: "情報が正常に更新されました！",
    },
    changePass: {
      fillAllFields: "すべての項目を入力してください！",
      passwordTooShort: "パスワードが短すぎます（8文字以上必要です）！",
      passwordSame: "新しいパスワードは現在のパスワードと同じにできません！",
      passwordNotMatch: "新しいパスワードと確認用パスワードが一致しません！",
      updateSuccess: "パスワードが正常に更新されました！",
    },
  },
};

export default jaTranslations;
