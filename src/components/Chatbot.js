export const Chatbot = () => {
    return `
        <div class="fixed bottom-4 right-4 z-50">
            <!-- Chat Button -->
            <button id="chatButton" class="bg-[#E63946] hover:bg-[#1D3557] text-white rounded-full p-3 sm:p-4 shadow-lg transition-all duration-300 border-2 sm:border-4 border-[#F1FAEE]">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            </button>

            <!-- Chat Window -->
            <div id="chatWindow" class="fixed bottom-20 right-4 w-[calc(100%-2rem)] sm:w-80 md:w-96 bg-[#F1FAEE] rounded-lg shadow-xl border-2 border-[#A8DADC] transform translate-x-full transition-transform duration-300 ease-in-out">
                <!-- Chat Header -->
                <div class="bg-[#E63946] text-white p-3 sm:p-4 rounded-t-lg flex justify-between items-center">
                    <h3 class="font-semibold text-sm sm:text-base">ChiliDetect Assistant</h3>
                    <button id="closeChat" class="text-white hover:text-[#A8DADC]">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>

                <!-- Chat Messages -->
                <div id="chatMessages" class="h-[calc(100vh-16rem)] sm:h-96 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-[#F1FAEE] custom-scrollbar">
                    <!-- Messages will be added here -->
                </div>

                <!-- Chat Input -->
                <div class="border-t border-[#A8DADC] p-3 sm:p-4 bg-[#F1FAEE]">
                    <div class="flex space-x-2">
                        <input type="text" id="messageInput" 
                            class="flex-1 border border-[#A8DADC] rounded-lg px-3 sm:px-4 py-2 text-sm sm:text-base focus:outline-none focus:border-[#E63946] bg-white text-[#1D3557]"
                            placeholder="Ketik pesan Anda...">
                        <button id="sendMessage" 
                            class="bg-[#E63946] text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-[#1D3557] transition-colors text-sm sm:text-base whitespace-nowrap">
                            Kirim
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <style>
        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
            background: #A8DADC;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #E63946;
            border-radius: 8px;
        }

        @media (max-width: 640px) {
            #chatWindow {
                bottom: 16px;
                right: 16px;
                left: 16px;
                width: auto;
            }
            
            #chatButton {
                bottom: 16px;
                right: 16px;
            }
        }
        </style>
    `;
};

// Inisialisasi event listener untuk chatbot
export const initChatbot = () => {
    const chatButton = document.getElementById('chatButton');
    const chatWindow = document.getElementById('chatWindow');
    const closeChat = document.getElementById('closeChat');
    const messageInput = document.getElementById('messageInput');
    const sendMessage = document.getElementById('sendMessage');
    const chatMessages = document.getElementById('chatMessages');

    // Toggle chat window
    chatButton.addEventListener('click', () => {
        chatWindow.classList.toggle('translate-x-full');
    });

    closeChat.addEventListener('click', () => {
        chatWindow.classList.add('translate-x-full');
    });

    // Fungsi untuk menambahkan pesan
    const addMessage = (message, isUser = false) => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `flex ${isUser ? 'justify-end' : 'justify-start'}`;
        messageDiv.innerHTML = `
            <div class="${isUser ? 'bg-[#E63946] text-white' : 'bg-[#A8DADC] text-[#1D3557]'} 
                rounded-lg px-3 sm:px-4 py-2 max-w-[80%] shadow text-sm sm:text-base">
                ${message}
            </div>
        `;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    // Kirim pesan
    const sendMessageHandler = () => {
        const message = messageInput.value.trim();
        if (message) {
            addMessage(message, true);
            messageInput.value = '';
            
            // Simulasi respons bot
            setTimeout(() => {
                addMessage('Terima kasih atas pesannya! Saya akan membantu Anda segera.');
            }, 1000);
        }
    };

    sendMessage.addEventListener('click', sendMessageHandler);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessageHandler();
        }
    });
}; 