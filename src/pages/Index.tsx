import { useState } from "react";
import Icon from "@/components/ui/icon";

type Tab = "home" | "history" | "downloads" | "settings";

const quickLinks = [
  { name: "YouTube", icon: "Play", url: "youtube.com", color: "#ff3cac" },
  { name: "Google", icon: "Search", url: "google.com", color: "#00f5ff" },
  { name: "Telegram", icon: "Send", url: "telegram.org", color: "#9b59ff" },
  { name: "GitHub", icon: "Code2", url: "github.com", color: "#39ff14" },
  { name: "Twitter", icon: "Twitter", url: "x.com", color: "#00bfff" },
  { name: "Reddit", icon: "MessageSquare", url: "reddit.com", color: "#ff6b35" },
  { name: "Spotify", icon: "Music", url: "spotify.com", color: "#1ed760" },
  { name: "Netflix", icon: "Tv", url: "netflix.com", color: "#e50914" },
];

const historyData = [
  { title: "GitHub — Explore open source projects", url: "github.com/explore", time: "2 мин назад", favicon: "Code2", color: "#39ff14" },
  { title: "YouTube — Trending Videos", url: "youtube.com/trending", time: "15 мин назад", favicon: "Play", color: "#ff3cac" },
  { title: "Google — поиск: react 19 features", url: "google.com/search?q=react+19", time: "32 мин назад", favicon: "Search", color: "#00f5ff" },
  { title: "Telegram Web", url: "web.telegram.org", time: "1 час назад", favicon: "Send", color: "#9b59ff" },
  { title: "Stack Overflow — async await best practices", url: "stackoverflow.com/questions", time: "2 часа назад", favicon: "HelpCircle", color: "#f48024" },
  { title: "Spotify — Daily Mix 1", url: "open.spotify.com/playlist", time: "3 часа назад", favicon: "Music", color: "#1ed760" },
  { title: "Netflix — Новые релизы", url: "netflix.com/latest", time: "Вчера", favicon: "Tv", color: "#e50914" },
  { title: "Reddit — r/programming", url: "reddit.com/r/programming", time: "Вчера", favicon: "MessageSquare", color: "#ff6b35" },
];

const downloadsData = [
  { name: "project-final-v2.zip", size: "24.5 MB", status: "done", type: "archive", date: "Сегодня", color: "#00f5ff" },
  { name: "report_2026_june.pdf", size: "3.1 MB", status: "done", type: "pdf", date: "Сегодня", color: "#ff3cac" },
  { name: "design-assets.figma", size: "87.2 MB", status: "progress", progress: 62, type: "design", date: "Сейчас", color: "#9b59ff" },
  { name: "ubuntu-24.04.iso", size: "1.2 GB", status: "progress", progress: 28, type: "disk", date: "Сейчас", color: "#39ff14" },
  { name: "node_modules_backup.tar", size: "456 MB", status: "done", type: "archive", date: "Вчера", color: "#00f5ff" },
  { name: "video_tutorial_react.mp4", size: "210 MB", status: "done", type: "video", date: "Вчера", color: "#ff6b35" },
];

const fileIcon = (type: string) => {
  const map: Record<string, string> = {
    archive: "Package",
    pdf: "FileText",
    design: "Figma",
    disk: "HardDrive",
    video: "Video",
  };
  return map[type] || "File";
};

const vpnLocations = [
  { name: "Германия", flag: "🇩🇪", ping: "12ms", load: 34 },
  { name: "Нидерланды", flag: "🇳🇱", ping: "18ms", load: 45 },
  { name: "США", flag: "🇺🇸", ping: "87ms", load: 67 },
  { name: "Япония", flag: "🇯🇵", ping: "124ms", load: 22 },
];

const searchEngines = [
  { name: "Google", icon: "Search", color: "#4285F4", url: "https://www.google.com/search?q=" },
  { name: "Яндекс", icon: "Search", color: "#FF0000", url: "https://yandex.ru/search/?text=" },
  { name: "Bing", icon: "Search", color: "#008272", url: "https://www.bing.com/search?q=" },
  { name: "DuckDuckGo", icon: "Shield", color: "#DE5833", url: "https://duckduckgo.com/?q=" },
  { name: "YouTube", icon: "Play", color: "#ff3cac", url: "https://www.youtube.com/results?search_query=" },
  { name: "GitHub", icon: "Code2", color: "#39ff14", url: "https://github.com/search?q=" },
];

export default function BrowserApp() {
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [searchValue, setSearchValue] = useState("");
  const [heroSearch, setHeroSearch] = useState("");
  const [showEngines, setShowEngines] = useState(false);
  const [vpnEnabled, setVpnEnabled] = useState(false);
  const [vpnLocation, setVpnLocation] = useState(0);
  const [trackerBlock, setTrackerBlock] = useState(true);
  const [adBlock, setAdBlock] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [historyFilter, setHistoryFilter] = useState("all");

  const navItems: { id: Tab; icon: string; label: string }[] = [
    { id: "home", icon: "Globe", label: "Главная" },
    { id: "history", icon: "History", label: "История" },
    { id: "downloads", icon: "Download", label: "Загрузки" },
    { id: "settings", icon: "Settings", label: "Настройки" },
  ];

  const filteredHistory = historyData.filter(item =>
    searchQuery === "" ||
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.url.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-mesh flex flex-col overflow-hidden">
      {/* Top bar */}
      <header className="glass-strong border-b border-white/5 px-4 py-3 flex items-center gap-3 sticky top-0 z-50 animate-fade-in">
        <div className="flex gap-1.5 mr-2 shrink-0">
          <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors cursor-pointer" />
        </div>

        <div className="flex gap-1 shrink-0">
          <button className="w-7 h-7 rounded-lg glass flex items-center justify-center transition-all group">
            <Icon name="ChevronLeft" size={14} className="text-white/20" />
          </button>
          <button className="w-7 h-7 rounded-lg glass flex items-center justify-center transition-all group">
            <Icon name="ChevronRight" size={14} className="text-white/20" />
          </button>
          <button className="w-7 h-7 rounded-lg glass flex items-center justify-center transition-all group">
            <Icon name="RotateCw" size={13} className="text-white/20" />
          </button>
        </div>

        <div className="flex-1 relative max-w-2xl mx-auto">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10 flex items-center gap-1.5">
            <Icon name="ShieldCheck" size={14} className="text-neon-cyan" />
          </div>
          <input
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            onKeyDown={e => {
              if (e.key === "Enter" && searchValue.trim()) {
                const val = searchValue.trim();
                const url = val.startsWith("http") ? val : `https://www.google.com/search?q=${encodeURIComponent(val)}`;
                window.open(url, "_blank");
              }
            }}
            placeholder="Поиск или введите адрес..."
            className="w-full pl-9 pr-4 py-2 text-sm rounded-xl glass border border-white/10 focus:border-neon-cyan/50 focus:outline-none focus:ring-1 focus:ring-neon-cyan/30 text-white/80 placeholder:text-white/25 transition-all bg-transparent"
          />
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setVpnEnabled(!vpnEnabled)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 ${
              vpnEnabled
                ? "bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/40 shadow-[0_0_12px_rgba(0,245,255,0.2)]"
                : "glass text-white/40 hover:text-white/70"
            }`}
          >
            <Icon name="Shield" size={13} />
            <span>{vpnEnabled ? "VPN вкл" : "VPN"}</span>
          </button>

          <button className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:border-neon-violet/40 transition-all group">
            <Icon name="Star" size={14} className="text-white/40 group-hover:text-neon-violet" />
          </button>
          <button className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:border-neon-pink/40 transition-all group">
            <Icon name="User" size={14} className="text-white/40 group-hover:text-neon-pink" />
          </button>
        </div>
      </header>

      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <nav className="w-16 glass border-r border-white/5 flex flex-col items-center py-4 gap-1 shrink-0 sticky top-[53px] h-[calc(100vh-53px)]">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-0.5 transition-all duration-200 group relative ${
                activeTab === item.id
                  ? "bg-neon-cyan/15 border border-neon-cyan/30 shadow-[0_0_16px_rgba(0,245,255,0.15)]"
                  : "hover:bg-white/5"
              }`}
              title={item.label}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <Icon
                name={item.icon}
                size={18}
                className={`transition-colors ${activeTab === item.id ? "text-neon-cyan" : "text-white/35 group-hover:text-white/70"}`}
              />
              {activeTab === item.id && (
                <div className="absolute -right-0 top-1/2 -translate-y-1/2 w-0.5 h-6 bg-neon-cyan rounded-full shadow-[0_0_8px_#00f5ff]" />
              )}
            </button>
          ))}
          <div className="mt-auto">
            <button className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-white/5 transition-all group">
              <Icon name="Plus" size={18} className="text-white/30 group-hover:text-white/70" />
            </button>
          </div>
        </nav>

        <main className="flex-1 overflow-y-auto relative">
          {/* HOME */}
          {activeTab === "home" && (
            <div className="min-h-full p-8 animate-fade-in">
              <div className="max-w-2xl mx-auto pt-8 pb-12 text-center animate-slide-up">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-neon-cyan/20 text-xs text-neon-cyan/80 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
                    Защита активна · {trackerBlock ? "Трекеры блокируются" : "Уязвим"}
                  </div>
                  <h1 className="font-display text-4xl font-black gradient-text mb-2">
                    Добро пожаловать
                  </h1>
                  <p className="text-white/35 text-sm">Воскресенье, 7 июня 2026</p>
                </div>

                <div className="relative">
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-neon-cyan/30 via-neon-violet/20 to-neon-pink/30 blur-sm" />
                  <div className="relative flex items-center glass-strong rounded-2xl px-5 py-3.5 border border-white/10 focus-within:border-neon-cyan/40 transition-all">
                    <Icon name="Search" size={18} className="text-white/30 mr-3 shrink-0" />
                    <input
                      value={heroSearch}
                      onChange={e => setHeroSearch(e.target.value)}
                      onKeyDown={e => { if (e.key === "Enter" && heroSearch.trim()) setShowEngines(true); }}
                      placeholder="Поиск в интернете или адрес сайта..."
                      className="flex-1 bg-transparent text-white/80 placeholder:text-white/25 outline-none text-base"
                    />
                    <button
                      onClick={() => heroSearch.trim() && setShowEngines(true)}
                      className="ml-3 px-4 py-1.5 bg-neon-cyan text-[#0a0c14] text-sm font-bold rounded-xl hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all active:scale-95"
                    >
                      Найти
                    </button>
                  </div>

                  {/* Search engine picker */}
                  {showEngines && (
                    <div className="absolute left-0 right-0 top-full mt-3 z-50 animate-slide-up">
                      <div className="glass-strong rounded-2xl border border-white/10 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-xs text-white/40 font-medium">Выберите поисковик</p>
                          <button onClick={() => setShowEngines(false)} className="text-white/25 hover:text-white/60 transition-colors">
                            <Icon name="X" size={14} />
                          </button>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {searchEngines.map((engine, i) => (
                            <button
                              key={i}
                              onClick={() => {
                                window.open(`${engine.url}${encodeURIComponent(heroSearch)}`, "_blank");
                                setShowEngines(false);
                              }}
                              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-transparent hover:border-white/10 transition-all group cursor-pointer"
                              style={{ background: `${engine.color}10` }}
                            >
                              <div
                                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
                                style={{ background: `${engine.color}20`, border: `1px solid ${engine.color}35` }}
                              >
                                <Icon name={engine.icon} size={13} style={{ color: engine.color }} />
                              </div>
                              <span className="text-sm text-white/70 group-hover:text-white/95 font-medium transition-colors truncate">{engine.name}</span>
                            </button>
                          ))}
                        </div>
                        <div className="mt-3 pt-3 border-t border-white/5">
                          <p className="text-xs text-white/20 text-center truncate">
                            Поиск: <span className="text-white/40">«{heroSearch}»</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-center gap-6 mt-6">
                  {[
                    { label: "Трекеров заблокировано", val: "1 247", icon: "ShieldOff", color: "#00f5ff" },
                    { label: "Реклам убрано", val: "342", icon: "EyeOff", color: "#9b59ff" },
                    { label: "Сохранено трафика", val: "18 МБ", icon: "Zap", color: "#ff3cac" },
                  ].map((s, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      <Icon name={s.icon} size={14} style={{ color: s.color }} />
                      <span className="font-semibold" style={{ color: s.color }}>{s.val}</span>
                      <span className="text-white/30">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
                <h2 className="text-xs font-semibold text-white/30 uppercase tracking-widest mb-4">Быстрый доступ</h2>
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
                  {quickLinks.map((link, i) => (
                    <button
                      key={i}
                      className="flex flex-col items-center gap-2 p-3 rounded-2xl glass hover:bg-white/8 border border-transparent hover:border-white/10 transition-all group animate-slide-up"
                      style={{ animationDelay: `${i * 0.04}s` }}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                        style={{ background: `${link.color}18`, border: `1px solid ${link.color}33` }}
                      >
                        <Icon name={link.icon} size={18} style={{ color: link.color }} />
                      </div>
                      <span className="text-xs text-white/50 group-hover:text-white/80 transition-colors">{link.name}</span>
                    </button>
                  ))}
                </div>

                <h2 className="text-xs font-semibold text-white/30 uppercase tracking-widest mt-10 mb-4">Сегодня в сети</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { title: "ИИ превзошёл человека в новом тесте рассуждений", tag: "Технологии", color: "#00f5ff", time: "2ч" },
                    { title: "Запуск нового поколения квантовых чипов", tag: "Наука", color: "#9b59ff", time: "4ч" },
                    { title: "Обновление безопасности устранило 47 уязвимостей", tag: "Безопасность", color: "#ff3cac", time: "6ч" },
                  ].map((news, i) => (
                    <div
                      key={i}
                      className="glass rounded-2xl p-4 border border-white/5 hover:border-white/10 transition-all cursor-pointer group animate-slide-up"
                      style={{ animationDelay: `${0.2 + i * 0.07}s` }}
                    >
                      <div
                        className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-3"
                        style={{ background: `${news.color}15`, color: news.color }}
                      >
                        {news.tag}
                      </div>
                      <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors leading-relaxed font-medium">{news.title}</p>
                      <p className="text-xs text-white/25 mt-2">{news.time} назад</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* HISTORY */}
          {activeTab === "history" && (
            <div className="p-8 animate-fade-in">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-between mb-6 animate-slide-up">
                  <div>
                    <h1 className="font-display text-2xl font-bold text-white/90">История</h1>
                    <p className="text-sm text-white/35 mt-1">Все посещённые страницы</p>
                  </div>
                  <button className="flex items-center gap-2 px-3 py-2 rounded-xl glass text-xs text-white/40 hover:text-red-400 hover:border-red-400/30 transition-all">
                    <Icon name="Trash2" size={13} />
                    Очистить всё
                  </button>
                </div>

                <div className="relative mb-5 animate-slide-up stagger-1">
                  <Icon name="Search" size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/25" />
                  <input
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Поиск по истории..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl glass border border-white/10 focus:border-neon-cyan/40 focus:outline-none text-sm text-white/70 placeholder:text-white/20 bg-transparent transition-all"
                  />
                </div>

                <div className="flex gap-2 mb-5 animate-slide-up stagger-2">
                  {["all", "today", "week"].map(f => (
                    <button
                      key={f}
                      onClick={() => setHistoryFilter(f)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        historyFilter === f
                          ? "bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/30"
                          : "glass text-white/40 hover:text-white/70"
                      }`}
                    >
                      {f === "all" ? "Все" : f === "today" ? "Сегодня" : "Неделя"}
                    </button>
                  ))}
                </div>

                <div className="space-y-2">
                  {filteredHistory.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3.5 rounded-xl glass border border-transparent hover:border-white/8 transition-all group cursor-pointer animate-slide-up"
                      style={{ animationDelay: `${i * 0.04}s` }}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}
                      >
                        <Icon name={item.favicon} size={16} style={{ color: item.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white/75 group-hover:text-white/90 font-medium truncate transition-colors">{item.title}</p>
                        <p className="text-xs text-white/25 mt-0.5 truncate">{item.url}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-xs text-white/25">{item.time}</p>
                        <button className="opacity-0 group-hover:opacity-100 mt-1 transition-opacity">
                          <Icon name="X" size={12} className="text-white/30 hover:text-red-400" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* DOWNLOADS */}
          {activeTab === "downloads" && (
            <div className="p-8 animate-fade-in">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-between mb-6 animate-slide-up">
                  <div>
                    <h1 className="font-display text-2xl font-bold text-white/90">Загрузки</h1>
                    <p className="text-sm text-white/35 mt-1">Файлы и документы</p>
                  </div>
                  <button className="flex items-center gap-2 px-3 py-2 rounded-xl glass border border-white/10 text-xs text-white/50 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all">
                    <Icon name="FolderOpen" size={13} />
                    Открыть папку
                  </button>
                </div>

                {downloadsData.filter(d => d.status === "progress").length > 0 && (
                  <div className="mb-6 animate-slide-up stagger-1">
                    <h2 className="text-xs text-white/30 font-semibold uppercase tracking-widest mb-3">Загружается</h2>
                    <div className="space-y-3">
                      {downloadsData.filter(d => d.status === "progress").map((file, i) => (
                        <div key={i} className="p-4 rounded-2xl glass border border-neon-violet/20">
                          <div className="flex items-center gap-3 mb-3">
                            <div
                              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                              style={{ background: `${file.color}15`, border: `1px solid ${file.color}30` }}
                            >
                              <Icon name={fileIcon(file.type)} size={18} style={{ color: file.color }} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-white/85 truncate">{file.name}</p>
                              <p className="text-xs text-white/30">{file.size}</p>
                            </div>
                            <button className="text-white/25 hover:text-white/60 transition-colors">
                              <Icon name="X" size={14} />
                            </button>
                          </div>
                          <div className="relative h-1.5 bg-white/8 rounded-full overflow-hidden">
                            <div
                              className="absolute left-0 top-0 h-full rounded-full transition-all duration-500"
                              style={{
                                width: `${file.progress}%`,
                                background: `linear-gradient(90deg, ${file.color}80, ${file.color})`,
                                boxShadow: `0 0 8px ${file.color}66`
                              }}
                            />
                          </div>
                          <div className="flex justify-between mt-1.5">
                            <span className="text-xs text-white/25">{file.size}</span>
                            <span className="text-xs font-semibold" style={{ color: file.color }}>{file.progress}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="animate-slide-up stagger-2">
                  <h2 className="text-xs text-white/30 font-semibold uppercase tracking-widest mb-3">Завершённые</h2>
                  <div className="space-y-2">
                    {downloadsData.filter(d => d.status === "done").map((file, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3.5 rounded-xl glass border border-transparent hover:border-white/8 group cursor-pointer transition-all animate-slide-up"
                        style={{ animationDelay: `${i * 0.05}s` }}
                      >
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: `${file.color}10`, border: `1px solid ${file.color}20` }}
                        >
                          <Icon name={fileIcon(file.type)} size={16} style={{ color: file.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-white/75 group-hover:text-white/90 font-medium truncate">{file.name}</p>
                          <p className="text-xs text-white/25">{file.size} · {file.date}</p>
                        </div>
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="w-7 h-7 rounded-lg glass flex items-center justify-center">
                            <Icon name="FolderOpen" size={12} className="text-white/40 hover:text-neon-cyan" />
                          </button>
                          <button className="w-7 h-7 rounded-lg glass flex items-center justify-center">
                            <Icon name="Trash2" size={12} className="text-white/40 hover:text-red-400" />
                          </button>
                        </div>
                        <Icon name="CheckCircle2" size={15} className="shrink-0 ml-1" style={{ color: file.color }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SETTINGS */}
          {activeTab === "settings" && (
            <div className="p-8 animate-fade-in">
              <div className="max-w-2xl mx-auto">
                <div className="mb-6 animate-slide-up">
                  <h1 className="font-display text-2xl font-bold text-white/90">Настройки</h1>
                  <p className="text-sm text-white/35 mt-1">Управление браузером и профилем</p>
                </div>

                <div className="mb-6 animate-slide-up stagger-1">
                  <div className="p-5 rounded-2xl relative overflow-hidden border border-white/8">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/8 via-transparent to-neon-violet/8" />
                    <div className="relative flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-cyan/30 to-neon-violet/30 border border-white/15 flex items-center justify-center text-2xl">
                        🚀
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-white/90 text-base">Мой профиль</p>
                        <p className="text-sm text-white/40 mt-0.5">user@example.com</p>
                        <div className="flex gap-2 mt-2">
                          <span className="text-xs px-2 py-0.5 rounded-full bg-neon-cyan/15 text-neon-cyan border border-neon-cyan/25">Pro</span>
                          <span className="text-xs text-white/30">Данные синхронизированы</span>
                        </div>
                      </div>
                      <button className="px-4 py-2 rounded-xl glass text-xs text-white/50 hover:text-white hover:border-white/20 transition-all">
                        Изменить
                      </button>
                    </div>
                  </div>
                </div>

                <SettingsSection title="VPN и приватность" icon="Shield" iconColor="#00f5ff" className="animate-slide-up stagger-2">
                  <div className="p-4 rounded-xl glass border border-white/5 mb-3">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Icon name="Shield" size={16} className="text-neon-cyan" />
                        <span className="text-sm text-white/80 font-medium">VPN-защита</span>
                      </div>
                      <Toggle value={vpnEnabled} onChange={setVpnEnabled} color="#00f5ff" />
                    </div>
                    {vpnEnabled && (
                      <div className="space-y-2 animate-fade-in">
                        <p className="text-xs text-white/30 mb-2">Выберите локацию:</p>
                        {vpnLocations.map((loc, i) => (
                          <button
                            key={i}
                            onClick={() => setVpnLocation(i)}
                            className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all text-left ${
                              vpnLocation === i
                                ? "bg-neon-cyan/10 border border-neon-cyan/30"
                                : "glass border border-transparent hover:border-white/10"
                            }`}
                          >
                            <span className="text-lg">{loc.flag}</span>
                            <span className="text-sm text-white/70 flex-1">{loc.name}</span>
                            <span className="text-xs text-white/30">{loc.ping}</span>
                            <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                              <div
                                className="h-full rounded-full"
                                style={{ width: `${loc.load}%`, background: loc.load < 50 ? "#39ff14" : loc.load < 75 ? "#ffb700" : "#ff3cac" }}
                              />
                            </div>
                            {vpnLocation === i && <Icon name="Check" size={12} className="text-neon-cyan" />}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <SettingsRow icon="ShieldOff" title="Блокировка трекеров" desc="Защита от слежки и сбора данных" color="#9b59ff" value={trackerBlock} onChange={setTrackerBlock} />
                  <SettingsRow icon="EyeOff" title="Блокировка рекламы" desc="Убирает баннеры и всплывающие окна" color="#ff3cac" value={adBlock} onChange={setAdBlock} />
                </SettingsSection>

                <SettingsSection title="Интерфейс" icon="Palette" iconColor="#9b59ff" className="animate-slide-up stagger-3">
                  <SettingsRow icon="Moon" title="Тёмная тема" desc="Комфортный просмотр в любое время" color="#9b59ff" value={darkMode} onChange={setDarkMode} />
                  <SettingsRow icon="Bell" title="Уведомления" desc="Push-уведомления от сайтов" color="#ff3cac" value={notifications} onChange={setNotifications} />
                </SettingsSection>

                <SettingsSection title="Данные и хранилище" icon="Database" iconColor="#ff3cac" className="animate-slide-up stagger-4">
                  {[
                    { label: "Очистить историю", icon: "History", color: "#ff6b35" },
                    { label: "Удалить куки", icon: "Cookie", color: "#ffb700" },
                    { label: "Сбросить настройки", icon: "RotateCcw", color: "#ff3cac" },
                  ].map((action, i) => (
                    <button
                      key={i}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl glass border border-transparent hover:border-red-500/20 hover:bg-red-500/5 transition-all group mb-2"
                    >
                      <Icon name={action.icon} size={15} style={{ color: action.color }} />
                      <span className="text-sm text-white/55 group-hover:text-white/80 transition-colors">{action.label}</span>
                      <Icon name="ChevronRight" size={13} className="ml-auto text-white/20 group-hover:text-white/40" />
                    </button>
                  ))}
                </SettingsSection>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function Toggle({ value, onChange, color }: { value: boolean; onChange: (v: boolean) => void; color: string }) {
  return (
    <button
      onClick={() => onChange(!value)}
      className="relative w-11 h-6 rounded-full transition-all duration-300"
      style={value ? { background: `${color}40`, boxShadow: `0 0 12px ${color}44` } : { background: "rgba(255,255,255,0.1)" }}
    >
      <div
        className="absolute top-1 w-4 h-4 rounded-full transition-all duration-300"
        style={{
          left: value ? "calc(100% - 20px)" : "4px",
          background: value ? color : "rgba(255,255,255,0.3)",
          boxShadow: value ? `0 0 8px ${color}` : "none"
        }}
      />
    </button>
  );
}

function SettingsRow({ icon, title, desc, color, value, onChange }: {
  icon: string; title: string; desc: string; color: string; value: boolean; onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl glass border border-transparent hover:border-white/8 transition-all mb-2">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${color}15`, border: `1px solid ${color}25` }}>
        <Icon name={icon} size={15} style={{ color }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-white/80 font-medium">{title}</p>
        <p className="text-xs text-white/30 mt-0.5">{desc}</p>
      </div>
      <Toggle value={value} onChange={onChange} color={color} />
    </div>
  );
}

function SettingsSection({ title, icon, iconColor, children, className }: {
  title: string; icon: string; iconColor: string; children: React.ReactNode; className?: string;
}) {
  return (
    <div className={`mb-6 ${className || ""}`}>
      <div className="flex items-center gap-2 mb-3">
        <Icon name={icon} size={14} style={{ color: iconColor }} />
        <h2 className="text-xs font-semibold text-white/30 uppercase tracking-widest">{title}</h2>
      </div>
      {children}
    </div>
  );
}