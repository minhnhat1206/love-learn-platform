
import React, { useState, useEffect } from 'react';
import { getAppState, addReward, redeemReward, deleteReward, getUserId } from '../services/storage';
import { AppState, Reward } from '../types';
import { Gift, Plus, Trash2, PartyPopper, Lock, UserCog } from 'lucide-react';

const Rewards: React.FC = () => {
  const [state, setState] = useState<AppState | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Admin Form State
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newPoints, setNewPoints] = useState(50);
  const [newIcon, setNewIcon] = useState('🎁');

  useEffect(() => {
    const appState = getAppState();
    setState(appState);
    setIsAdmin(getUserId() === 'tong');
  }, []);

  const refreshState = () => {
    setState({ ...getAppState() });
  };

  const handleAddReward = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newPoints) return;
    addReward(newTitle, newDesc, newPoints, newIcon);
    setNewTitle('');
    setNewDesc('');
    setNewPoints(50);
    setNewIcon('🎁');
    alert("Đã thêm quà! Dữ liệu sẽ đồng bộ để Vợ thấy nha.");
    refreshState();
  };

  const handleRedeem = (id: string) => {
    if (window.confirm('Vợ có chắc muốn đổi món quà này không?')) {
      const success = redeemReward(id);
      if (success) {
        alert('Đổi quà thành công! Hãy chụp màn hình gửi cho Tòng nha! 📸');
        refreshState();
      }
    }
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Xóa phần thưởng này nha?')) {
      deleteReward(id);
      refreshState();
    }
  };

  if (!state) return <div>Loading...</div>;

  const currentPoints = state.user.points;
  const sortedRewards = [...state.rewards].sort((a, b) => a.pointsRequired - b.pointsRequired);

  return (
    <div className="space-y-8 animate-fade-in-up pb-20">
      <header className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Cửa hàng hạnh phúc 🎁</h2>
          <p className="text-gray-500">Học chăm chỉ, tích điểm đổi quà nha vợ yêu!</p>
        </div>
        <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-pink-100 flex items-center gap-3">
           <div className="bg-yellow-100 p-2 rounded-full">
              <PartyPopper className="text-yellow-600" size={24} />
           </div>
           <div>
              <p className="text-xs text-gray-500 font-bold uppercase">Điểm tích lũy</p>
              <p className="text-2xl font-bold text-pastel-pinkDark">{currentPoints} tim</p>
           </div>
        </div>
      </header>

      {/* Rewards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedRewards.map((reward) => {
          // Check redemption status from USER data
          const isRedeemed = state.user.redeemedRewardIds.includes(reward.id);
          const canAfford = currentPoints >= reward.pointsRequired;

          return (
            <div 
              key={reward.id}
              className={`relative bg-white p-6 rounded-3xl border transition-all ${
                isRedeemed 
                  ? 'border-green-200 bg-green-50 opacity-80' 
                  : canAfford 
                    ? 'border-pastel-pink shadow-md hover:shadow-lg hover:scale-[1.02]' 
                    : 'border-gray-100 opacity-70 grayscale-[0.5]'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-4xl">{reward.icon}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  canAfford ? 'bg-pink-100 text-pastel-pinkDark' : 'bg-gray-100 text-gray-500'
                }`}>
                  {reward.pointsRequired} tim
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-1">{reward.title}</h3>
              <p className="text-sm text-gray-500 mb-6 min-h-[40px]">{reward.description}</p>

              {isAdmin && (
                 <button 
                   onClick={() => handleDelete(reward.id)}
                   className="absolute top-4 right-12 text-gray-300 hover:text-red-400 p-1 bg-white rounded-full shadow-sm"
                 >
                   <Trash2 size={16} />
                 </button>
              )}

              {isRedeemed ? (
                <button disabled className="w-full py-3 rounded-xl bg-green-200 text-green-700 font-bold cursor-default">
                  Đã đổi quà ✅
                </button>
              ) : (
                <button 
                  onClick={() => handleRedeem(reward.id)}
                  disabled={!canAfford}
                  className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors ${
                    canAfford 
                      ? 'bg-pastel-pink text-white hover:bg-pink-400 shadow-md shadow-pink-200' 
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  {canAfford ? 'Đổi quà ngay 🎁' : <span><Lock size={16} className="inline"/> Cần thêm điểm</span>}
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Admin Section: Add Reward */}
      {isAdmin ? (
        <section className="mt-12 bg-white p-6 rounded-3xl border-2 border-dashed border-gray-200">
          <h3 className="text-xl font-bold text-gray-700 mb-4 flex items-center gap-2">
             <UserCog className="text-pastel-pinkDark" /> Tòng Admin Panel
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Thêm quà ở đây, quà sẽ hiện lên máy Vợ sau khi Vợ tải lại trang nha.
          </p>
          <form onSubmit={handleAddReward} className="grid md:grid-cols-4 gap-4">
            <input 
              type="text" 
              placeholder="Tên món quà (vd: Đi ăn ốc)" 
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              className="md:col-span-2 p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-pastel-pink"
            />
            <input 
              type="text" 
              placeholder="Emoji (vd: 🐚)" 
              value={newIcon}
              onChange={e => setNewIcon(e.target.value)}
              className="p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-pastel-pink"
            />
             <input 
              type="number" 
              placeholder="Số tim cần" 
              value={newPoints}
              onChange={e => setNewPoints(Number(e.target.value))}
              className="p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-pastel-pink"
            />
            <input 
              type="text" 
              placeholder="Mô tả chi tiết..." 
              value={newDesc}
              onChange={e => setNewDesc(e.target.value)}
              className="md:col-span-3 p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-pastel-pink"
            />
            <button type="submit" className="bg-gray-800 text-white font-bold rounded-xl hover:bg-black transition-colors">
              Thêm quà
            </button>
          </form>
        </section>
      ) : (
         <div className="text-center pt-10 pb-4 opacity-50 text-xs text-gray-400">
           Yêu Vợ nhiều lắm! ❤️
         </div>
      )}
    </div>
  );
};

export default Rewards;
