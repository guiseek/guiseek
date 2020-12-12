type PlayerIcon = 'start' | 'screen' | 'beta' | 'box' | 'running-out' | 'cutted'

const playerIcons = new Map<PlayerIcon, string>([])

playerIcons.set(
  'start',
  '<svg width="216" height="216" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26.695 196.737c-2.622-2.705-2.235-108.04 0-110.913 1.538-1.966 156.775-1.966 159.867 0 2.857 1.815 2.084 109.174 0 110.913-4.621 3.824-156.607 3.361-159.867 0z" fill="#191919"/><path d="M109.88 206.157h-3.773c-20.25 0-39.39-.294-53.919-.74-27.266-.84-28.224-1.831-30.325-3.991-2.1-2.159-3.814-3.966-3.713-60.095 0-14.024.21-27.359.512-37.543.58-19.325 1.252-20.166 2.74-22.09 2.192-2.806 5.116-2.924 12.2-3.218 4.302-.177 10.419-.336 18.175-.462 14.368-.236 33.61-.37 54.272-.37s40.004.134 54.557.37c26.889.437 27.603.907 29.561 2.15 3.361 2.127 3.73 5.765 4.159 12.554.84 13.696.933 41.383.731 60.927-.471 45.181-1.412 45.962-4.201 48.273-2.051 1.68-3.412 2.823-30.56 3.63-13.495.386-31.283.605-50.416.605zm-77.345-15.125c22.208 2.202 126.181 2.235 148.061.059 1.185-16.998 1.681-81.505.261-99.15-22.83-1.193-125.064-1.193-148.28 0-1.328 18.032-1.361 82.345-.042 99.091z" fill="#191919"/><path d="M26.695 196.737c-2.622-2.705-2.235-108.04 0-110.913 1.538-1.966 156.775-1.966 159.867 0 2.857 1.815 2.084 109.174 0 110.913-4.621 3.824-156.607 3.361-159.867 0z" fill="#448AFF"/><path d="M187.554 103.78c.621-.924.789-26.216-.841-26.888-4.705-2.067-156.464-1.924-160.32.412-1.463.84-1.58 25.468-.925 26.51.656 1.042 161.464.89 162.086-.034z" fill="#191919"/><path d="M101.142 111.25c-23.838 0-48.55-.084-63.33-.336a568.517 568.517 0 01-9.176-.194c-3.983-.134-6.865-.226-8.848-3.361-.966-1.537-1.555-2.47-1.386-15.124.067-5.353.31-12.41 1.083-15.637a7.78 7.78 0 013.47-5.084c1.875-1.126 2.908-1.748 29.35-2.294 14.285-.294 33.418-.479 53.954-.52 20.225 0 39.45.066 54.104.302 26.149.412 27.501 1 29.056 1.68a7.35 7.35 0 014.134 4.941c.269.924 1.101 3.722 1.168 16.2.067 13.209-.546 14.142-1.58 15.679-2.033 3.034-4.319 3.092-10.444 3.244-3.101.075-7.563.151-13.343.21-10.756.117-25.485.201-42.61.252-8.041.033-16.755.042-25.602.042zM31.804 97.402c24.636.53 124.643.496 149.439-.042.076-4.36 0-10.394-.218-14.351-23.057-1.26-126.408-1.025-148.894.344-.252 3.89-.36 9.78-.327 14.05z" fill="#191919"/><path d="M187.554 103.78c.621-.924.789-26.216-.841-26.888-4.705-2.067-156.464-1.924-160.32.412-1.463.84-1.58 25.468-.925 26.51.656 1.042 161.464.89 162.086-.034z" fill="#fff"/><path d="M23.737 105.544s32.678-30.618 32.224-31.602c-.664-1.394-31.93-1.277-32.635-.36-.706.915-5.513 34.114.411 31.962zM185.982 43.332c.479-1.008-3.126-25.166-4.815-25.611-4.974-1.328-155.346 20.603-158.841 23.451-1.32 1.11 2.184 25.452 2.99 26.385.808.932 160.196-23.217 160.666-24.225z" fill="#191919"/><path d="M25.678 74.279a6.596 6.596 0 01-5.47-2.345c-1.176-1.352-1.89-2.193-3.596-14.755-.723-5.302-1.521-12.326-1.235-15.628a7.78 7.78 0 012.68-5.546c1.68-1.395 2.63-2.16 28.762-6.512 14.066-2.344 33.03-5.277 53.398-8.268 20.032-2.941 39.089-5.596 53.667-7.478 25.964-3.361 27.376-2.966 29.014-2.521a7.408 7.408 0 014.857 4.31c1.084 2.336 2.277 7.504 3.546 15.36 2.033 12.604 1.554 13.637.756 15.318-1.563 3.294-3.697 3.672-10.024 4.781-3.159.555-7.739 1.32-13.612 2.269-10.991 1.773-25.973 4.117-43.324 6.772-30.316 4.664-69.413 10.461-88.42 13.007-3.36.454-5.966.782-7.755.983a29.404 29.404 0 01-3.244.253zm3.218-27.922c.32 3.89 1.084 9.705 1.748 13.915 24.494-3.135 123.618-18.1 148.129-22.343-.572-4.117-1.504-9.654-2.303-13.318-22.913 2.042-125.425 17.15-147.574 21.746z" fill="#191919"/><path d="M185.982 43.332c.479-1.008-3.126-25.166-4.815-25.611-4.974-1.328-155.346 20.603-158.841 23.451-1.32 1.11 2.184 25.452 2.99 26.385.808.932 160.196-23.217 160.666-24.225z" fill="#fff"/><path d="M22.326 41.172s33.912 23.822 33.61 24.847c-.446 1.479-31.384 5.957-32.224 5.15-.84-.806-7.57-31.223-1.386-29.996zM54.306 32.72c-.152.84 36.794 28.88 38.651 28.568l31.787-4.722c1.614-.244-37.727-29.569-39.61-29.291-1.882.277-30.677 4.596-30.828 5.445zM119.762 22.99c-.152.84 36.794 28.879 38.651 28.568l31.787-4.722c1.614-.244-37.727-29.569-39.609-29.291-1.882.277-30.678 4.604-30.829 5.444zM59.28 105.679c-.269-.84 32.14-33.972 34.039-33.972h32.14c1.63 0-32.955 34.787-34.863 34.787-1.907 0-31.047 0-31.316-.815zM125.458 105.679c-.268-.84 32.14-33.972 34.039-33.972 1.899 0 28.871.547 28.871 2.177 0 .546-29.686 32.618-31.593 32.618-1.908 0-31.048-.008-31.317-.823z" fill="#191919"/><path d="M108.62 183.083c-12.705 0-25.35-.101-34.694-.269-16.99-.311-17.545-.672-18.536-1.319-1.63-1.05-2.05-2.647-2.378-8.957-.286-5.646-.37-14.562-.202-22.687.311-15.242 1.017-15.813 2.302-16.805 1.152-.924 1.244-1 17.646-1.168 8.873-.092 20.78-.143 33.518-.143 48.995 0 50.322.53 51.028.84 2.37.95 2.706 3.303 3.008 9.319.278 5.588.337 14.562.143 22.863-.092 4-.235 7.453-.411 9.974-.278 4.042-.505 6.025-2.446 7.033-.882.361-2.73 1.319-48.978 1.319z" fill="#fff"/><path d="M106.276 135.029c24.367 0 48.827.193 49.785.571 1.764.706 1.294 42.408 0 43.08-1.294.673-24.116 1.051-47.433 1.051-24.855 0-50.373-.37-51.415-1.051-1.622-1.05-1.386-41.962 0-43.08.479-.378 24.712-.571 49.063-.571zm0-6.722c-12.756 0-24.67.05-33.56.143-4.798.05-8.58.109-11.243.185-4.89.126-6.537.168-8.478 1.731-2.672 2.151-2.89 5.276-3.16 9.242-.176 2.588-.31 6.101-.394 10.176-.168 8.234-.084 17.25.21 22.964.277 5.445.479 9.369 3.907 11.587 1.857 1.202 2.353 1.521 20.309 1.857 9.36.177 22.031.269 34.761.269 12.285 0 23.67-.092 32.073-.252 16.091-.319 16.881-.731 18.485-1.546 3.698-1.924 3.966-5.739 4.244-9.781.176-2.571.319-6.066.42-10.083.193-8.402.134-17.435-.151-23.107-.11-2.142-.244-3.806-.412-5.041-.21-1.538-.756-5.63-4.706-7.201-1.42-.563-1.848-.74-18.544-.908-8.999-.092-21.006-.143-33.736-.143l-.025-.092z" fill="#191919"/><path d="M70.161 146.104c-4.41 0-4.621 6.512-.42 6.831 4.202.319 66.7.319 69.641 0 2.941-.319 4.411-6.302-.311-6.613-4.722-.311-63.448-.218-68.91-.218zM70.161 159.968c-4.41 0-4.621 6.512-.42 6.831 4.202.319 36.451.319 39.391 0 2.941-.319 4.412-6.302-.31-6.613-4.723-.311-33.199-.218-38.66-.218z" fill="#191919"/></svg>'
)
playerIcons.set(
  'screen',
  '<svg width="216" height="216" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.593 48C41.071 36.976 183.1 36.791 193.191 50.84c10.091 14.05 11.343 109.158-4.857 116.888-16.2 7.73-149.893 12.68-162.74-1.252-12.848-13.931-16.42-106.712 0-118.476z" fill="#191919"/><path d="M95.393 182.029c-64.615 0-72.17-8.192-74.782-10.974-5.277-5.722-9.067-18.989-11.243-39.433-1.908-17.872-2.059-38.047-.412-53.97 1.958-18.93 6.109-30.408 12.696-35.105L25.593 48l-3.899-5.478c3.034-2.16 9.915-5.277 34.619-7.403 15.637-1.344 35.224-2 55.154-1.823 20.536.201 39.778 1.26 54.247 2.94 24.368 2.908 30.308 7.025 32.93 10.68 6.352 8.848 8.092 34.03 8.562 48.248.773 23.46-.907 45.836-4.512 59.843-2.655 10.352-6.302 16.317-11.478 18.779-11.184 5.336-57.221 7.789-85.437 8.142-3.608.068-7.07.101-10.386.101zM29.492 53.504c-.202.143-4.865 3.714-7.125 25.535-1.555 15.04-1.404 34.165.411 51.155 2.219 20.83 5.882 29.753 7.756 31.736 3.36 2.983 26.485 7.26 76.186 6.571 43.122-.596 73.295-4.319 78.656-6.789.278-.227 3.294-2.933 5.739-16.805 2.521-14.091 3.42-34.241 2.471-53.903-1.042-21.56-3.941-33.207-5.731-36.047-3.941-3.083-28.51-7.965-78.824-8.234-47.357-.244-75.464 3.882-79.539 6.722v.059z" fill="#191919"/><path d="M25.593 48C41.071 36.976 183.1 36.791 193.191 50.84c10.091 14.05 11.343 109.158-4.857 116.888-16.2 7.73-149.893 12.68-162.74-1.252-12.848-13.931-16.42-106.712 0-118.476z" fill="#448AFF"/><path d="M70.967 80.585c-5.529 6.277-5.882 48.97 1.252 55.247 3.52 3.1 54.054 2.874 56.549 0 2.496-2.874 2.672-16.679 5.529-13.814 2.857 2.865 11.764 10.587 14.452 12.554 2.689 1.966 5.882 2.772 6.958-3.588 1.067-6.101.714-46.458.176-50.769-.487-3.924-5.176-3.588-8.209-.714-3.034 2.874-11.957 10.587-14.091 12.554-2.135 1.966-1.966-9.865-4.991-12.377-3.025-2.513-52.987-4.353-57.625.907z" fill="#fff"/></svg>'
)
playerIcons.set(
  'beta',
  '<svg width="217" height="216" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M174.661 107.023c-4.63-17.376-13.52-31.4-17.57-36.441-8.083-9.991-6.041-18.713-3.361-23.267 2.681-4.554 12.898-9.562 13.856-13.822.958-4.26-23.41-20.167-26.981-17.747-3.571 2.42-3.05 16.058-6.285 19.89-14.561 17.25-24.997 8.486-47.802 11.36-22.804 2.873-42.298 12.082-56.96 34.248-14.218 21.502-14.285 45.761-7.866 65.818 5.748 17.931 18.898 33.736 37.022 44.205a73.729 73.729 0 0036.845 9.554c29.367 0 57.188-15.082 72.607-39.206 9.848-15.411 12.032-33.829 6.495-54.592z" fill="#191919"/><path d="M95.568 207.543a80.418 80.418 0 01-40.215-10.461c-19.528-11.276-33.753-28.317-40.063-47.97-4.714-14.671-9.865-43.568 8.663-71.573 14.494-21.914 34.114-33.745 61.725-37.207a109.426 109.426 0 0119.628-.47c10.982.47 16.024.697 23.788-8.403.563-1.1 1.168-4.646 1.538-6.78 1.025-5.975 1.991-11.621 6.251-14.487 3.974-2.663 8.848-1.025 13.083.941a80.352 80.352 0 0111.142 6.47c7.638 5.235 14.511 10.924 13.066 17.402-1.042 4.638-5.193 7.848-9.504 11.209-1.68 1.32-4.537 3.53-5.125 4.52-1.252 2.11-3.496 7.849 2.773 15.596 4.688 5.79 13.923 20.502 18.838 38.929 6.05 22.687 3.588 42.853-7.318 59.944-16.68 26.132-46.668 42.34-78.27 42.34zm1.68-154.464a78.074 78.074 0 00-9.848.588C63.95 56.608 47.337 66.557 35.17 84.95c-15.427 23.325-11.058 47.642-7.075 60.053 5.277 16.469 17.351 30.829 33.98 40.433a66.977 66.977 0 0033.493 8.663c27.064 0 52.717-13.831 66.943-36.131 8.797-13.763 10.696-30.325 5.655-49.239-4.496-16.88-13.293-30.25-16.301-33.938-11.923-14.713-5.974-27.384-3.891-30.913 1.883-3.16 5.202-5.739 8.403-8.243.84-.672 2.05-1.596 3.05-2.445a77.893 77.893 0 00-14.914-9.83 85.389 85.389 0 00-.647 3.562c-.841 5.041-1.681 9.84-4.403 13.057-12.1 14.285-23.107 13.814-34.753 13.31-2.328-.11-4.832-.21-7.504-.21h.042z" fill="#191919"/><path d="M174.661 107.023c-4.63-17.376-13.52-31.4-17.57-36.441-8.083-9.991-6.041-18.713-3.361-23.267 2.681-4.554 12.898-9.562 13.856-13.822.958-4.26-23.41-20.167-26.981-17.747-3.571 2.42-3.05 16.058-6.285 19.89-14.561 17.25-24.997 8.486-47.802 11.36-22.804 2.873-42.298 12.082-56.96 34.248-14.218 21.502-14.285 45.761-7.866 65.818 5.748 17.931 18.898 33.736 37.022 44.205a73.729 73.729 0 0036.845 9.554c29.367 0 57.188-15.082 72.607-39.206 9.848-15.411 12.032-33.829 6.495-54.592z" fill="#fff"/><path d="M75.603 133.021L87.99 84.227c.798-3.075 4.2-4.705 7.797-1.563 3.596 3.143 33.409 34.451 33.409 34.451a4.071 4.071 0 01.003 5.645 4.078 4.078 0 01-1.751 1.077l-46.693 14.108a4.084 4.084 0 01-4.024-.946 4.078 4.078 0 01-1.127-3.978z" fill="#191919"/><path d="M157.074 109.032c-4.436-.647-11.763 3.756-15.402 3.957-3.638.202-12.368-3.361-16.107-3.361-3.739 0-11.167 3.286-13.654 3.311-2.488.025-9.134-1.622-13.251-1.622-4.117 0-8.99 1.681-13.075 1.63-4.083-.05-8.629-3.47-13.864-3.428-5.235.042-8.612 2.924-14.645 3.075-6.034.151-11.512-2.722-15.772-3.815-4.26-1.092-11.587-2.646-11.05 19.755.538 22.401 24.166 61.339 69.01 60.498 46.089-.916 67.641-43.693 67.641-60.271 0-16.578-5.386-19.082-9.831-19.729z" fill="#448AFF"/><path opacity=".2" d="M125.842 120.451c-2.185-3.294-8.554-8.831-8.554-8.831a31.172 31.172 0 01-5.453 1.176c-2.336.193-9.688-1.622-13.2-1.681-3.513-.058-11.428 2.051-13.713 1.731a41.804 41.804 0 01-6.16-1.68l-5.385 24.871c-.782 3.008 2.252 5.655 7.419 4.605 5.168-1.05 43.332-13.604 43.332-13.604 2.84-.865 3.899-3.302 1.714-6.587z" fill="#191919"/><path d="M67.436 87.487a6.504 6.504 0 00-8.2-1.78c-2.732 1.495-3.362 4.948-1.354 7.679 2.009 2.73 5.672 3.546 8.201 1.815a5.463 5.463 0 001.353-7.714zM144.614 90.975a4.59 4.59 0 00-5.781-1.278c-1.925 1.05-2.353 3.496-.95 5.42a4.295 4.295 0 005.781 1.277 3.854 3.854 0 001.615-2.51 3.861 3.861 0 00-.665-2.91z" fill="#448AFF"/><path d="M94.56 170.454a4.059 4.059 0 00-5.235-.176 3.17 3.17 0 00-.801 3.784c.2.418.492.787.851 1.081a3.797 3.797 0 005.235.176 3.396 3.396 0 00.998-2.443 3.405 3.405 0 00-1.049-2.422zM109.171 155.279a8.552 8.552 0 00-7.831 7.781c-.285 4.075 3.109 7.201 7.563 6.949 4.453-.252 7.957-3.756 7.831-7.781a7.184 7.184 0 00-2.318-5.067 7.179 7.179 0 00-5.245-1.882zM48.824 120.308a8.463 8.463 0 00-8.755 8.57 9.37 9.37 0 009.243 9.025h1.126c5.041.109 8.73-3.756 8.192-8.588a10.496 10.496 0 00-9.806-9.007z" fill="#fff"/><path d="M147.512 7.109c-3.361 3.302-3.134 11.956-5.243 18.662-2.109 6.705 9.319 14.082 13.268 11.47 3.949-2.614 14.41-10.202 16.662-14.285 2.252-4.084-21.359-19.141-24.687-15.847z" fill="#448AFF"/></svg>'
)
playerIcons.set(
  'box',
  '<svg width="216" height="216" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#prefix__clip0)"><path d="M109.029 119.581l-71.69-39.34a1.942 1.942 0 00-2.883 1.68c-.344 15.125-1.68 78.606.076 80.665 2.781 3.26 71.489 42.987 74.505 42.987 3.017 0 71.027-40.971 74.506-42.987 3.075-1.773.722-65.708.126-80.732a1.943 1.943 0 00-.992-1.61 1.947 1.947 0 00-1.89-.012l-71.758 39.349z" fill="#191919"/><path d="M109.029 212.27c-2.076 0-4.042 0-40.702-21.174-36.064-20.83-38.14-23.259-38.92-24.175-2-2.352-2.757-3.235-2.43-39.87.16-18.04.58-37.702.757-45.315a8.663 8.663 0 0112.84-7.394l68.463 37.568 68.515-37.593a8.668 8.668 0 0111.58 3.11 8.665 8.665 0 011.25 4.183c.303 7.638 1.034 27.367 1.32 45.5.159 10.285.142 18.486 0 24.46-.32 10.217-.841 14.595-4.756 16.864-.563.328-2.857 1.68-6.302 3.756-67.237 40.08-68.792 40.08-71.615 40.08zm-68.288-53.432c10.025 6.823 57.272 34.123 68.279 39.492 6.722-3.361 28.477-16.049 64.7-37.694l4.134-2.47c.84-7.697.647-34.249-.596-68.313l-64.994 35.619a6.726 6.726 0 01-6.47 0L41.002 89.92c-.74 35.073-.849 61.339-.26 68.918z" fill="#191919"/><path d="M34.523 76.98l74.506-39.735 74.505 39.735-74.505 40.879L34.523 76.98z" fill="#fff"/><path d="M109.365 34.556v80.614L34.859 74.283l74.506-39.727z" fill="#E6E6E6"/><path d="M109.029 119.581L34.523 78.695s-2 81.504 0 83.865c2.782 3.261 71.489 42.988 74.506 42.988 3.016 0 71.027-40.971 74.505-42.988 3.479-2.016 0-83.865 0-83.865l-74.505 40.886z" fill="#448AFF"/><path d="M109.029 119.581c-.84 1.731-1.681 86.387 0 85.967 5.335-1.311 71.69-39.433 74.783-43.483 1.327-1.756 2.008-82.287-.261-83.37-2.269-1.084-73.657 39.156-74.522 40.886z" fill="#2F72E2"/><path d="M183.097 74.048c3.857-2.126 24.754-13.721 23.653-14.36-1.1-.639-73.665-38.601-75.497-39.156-1.68-.512-20.569 11.848-23.636 13.864-3.159-2.193-25.897-17.847-28.485-16.402-2.78 1.513-70.069 39.056-72.48 40.45-2.218 1.32 22.51 13.747 26.334 15.663-3.571 1.806-24.948 12.26-23.628 13.015 1.319.757 70.43 41.543 74.127 41.946 2.378.26 21.679-11.965 24.216-13.646 2.84 1.882 26.048 17.209 28.367 15.898l73.212-42.013c1.352-.74-21.78-12.974-26.183-15.259zm-75.396 41.055L33.969 74.09l73.598-39.257 74.203 39.14-74.069 41.13z" fill="#191919"/><path d="M135.808 138.168c-3.361 0-7.957-2.252-17.2-7.84a383.297 383.297 0 01-10.924-6.89 422.96 422.96 0 01-8.68 5.319c-11.267 6.63-13.73 7.268-16.25 6.999-2.151-.235-4.823-.521-75.094-41.828l-1.68-.983a6.823 6.823 0 01-3.412-6.125c.143-4.638 3.874-6.613 12.05-10.923 1.16-.614 2.37-1.244 3.57-1.858l-3.007-1.672C3.199 65.847-.07 63.427-.204 58.873a6.974 6.974 0 013.503-6.252c1.849-1.067 39.308-21.972 70.405-39.324l2.16-1.201c4.336-2.42 9.243-.269 20.872 7.008 4.042 2.52 8.075 5.21 10.974 7.175 20.922-13.612 22.51-13.124 25.518-12.2 2.874.84 76.295 39.416 76.892 39.77a6.876 6.876 0 013.395 5.915c-.042 4.562-2.958 6.251-13.789 12.545l-2.697 1.563 4.008 2.21c12.041 6.721 14.889 8.46 14.973 13.032a6.822 6.822 0 01-3.42 6.05l-66.506 38.13-6.722 3.849a6.983 6.983 0 01-3.554 1.025zm-15.335-22.485c6.344 3.982 11.764 7.133 14.595 8.469l4.378-2.52 57.053-32.712c-3.621-2.041-8.352-4.63-14.032-7.646l-61.994 34.409zM22.407 86.988c37.181 21.788 55.608 32.106 61.288 34.904 2.445-1.193 6.848-3.747 11.075-6.31l-61.423-34.14c-4.63 2.31-8.2 4.126-10.94 5.546zm25.62-12.772l59.657 33.173 59.936-33.257-60.062-31.678-59.532 31.762zM19.078 59.192c3.849 2.16 8.865 4.823 14.285 7.562l61.574-32.837a154.638 154.638 0 00-14.772-8.84 73376.054 73376.054 0 00-61.095 34.115h.008zM120.498 34.06l61.91 32.653a598.908 598.908 0 0011.209-6.378c-17.595-9.243-53.171-27.729-62.674-32.526-2.202 1.184-5.949 3.386-10.445 6.251z" fill="#191919"/><path d="M183.937 74.048c.068-1.092 23.914-13.721 22.813-14.36-1.1-.639-73.665-38.601-75.497-39.156-1.68-.512-23.14 13.805-23.636 13.864-.496.06-25.905-17.88-28.485-16.435-2.78 1.546-70.069 39.089-72.48 40.483-2.218 1.32 26.275 14.957 26.334 15.663.058.706-24.948 12.26-23.637 13.015 1.31.757 70.439 41.543 74.136 41.946 2.378.26 23.46-13.646 24.216-13.646.756 0 26.048 17.209 28.367 15.898l73.212-42.013c1.352-.74-25.41-14.192-25.343-15.259zm-76.236 41.055c-.84-.067-73.707-40.45-73.724-40.988-.017-.538 73.102-39.18 73.598-39.256.496-.076 74.211 38.088 74.203 39.139-.008 1.05-73.228 41.147-74.077 41.08v.025zM61.033 157.805l-.37-29.981c0-1.873 1.723-2.268 3.118-.689l21.376 24.216c1.336 1.521 1.361 3.756.05 4.109l-21.006 5.722c-1.37.412-3.142-1.504-3.168-3.377z" fill="#fff"/><path d="M108.525 119.985c-.563 14.427-.841 65.262.512 85.563l-.512-85.563z" fill="#D32920"/><path d="M109.029 208.909a3.36 3.36 0 01-3.361-3.134c-1.378-20.738-1.067-71.607-.513-85.916a3.36 3.36 0 012.195-3.025 3.372 3.372 0 012.573.1 3.355 3.355 0 011.954 3.185c-.537 13.814-.84 65.061.504 85.211a3.347 3.347 0 01-1.865 3.239 3.364 3.364 0 01-1.269.34h-.218z" fill="#191919"/></g><defs><clipPath id="prefix__clip0"><path fill="#fff" transform="translate(.409 .105)" d="M0 0h215.105v215.105H0z"/></clipPath></defs></svg>'
)
playerIcons.set(
  'running-out',
  '<svg width="216" height="216" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M126.328 59.221c-4.638-.269-7.201-5.705-7.201-5.705-2.638-4.621-6.226-6.285-10.856-3.647l-16.713 9.537c-4.621 2.639-6.075 4.865-4.58 10.41 0 0 2.522 5.219 1.967 8.815-.555 3.596-19.2 18.771-18.175 49.928.941 28.619 13.848 42.139 37.459 52.777 26.417 11.906 64.834 4.36 84.025-31.93 20.066-37.896-.781-68.952-27.938-83.101-19.998-10.487-33.35-6.815-37.988-7.084z" fill="#191919"/><path d="M133.294 193.259a67.963 67.963 0 01-27.83-5.882c-28.468-12.822-40.466-29.829-41.416-58.683-.84-26.427 11.05-42.257 16.805-49.861a77.357 77.357 0 001.462-1.975 17.01 17.01 0 00-1.336-4.134 6.722 6.722 0 01-.453-1.21C77.71 61.078 83.18 56.39 88.264 53.508l16.721-9.537c7.68-4.387 15.352-2.025 20.024 6.15.085.14.161.287.227.437a5.509 5.509 0 001.604 1.9c.471 0 1.53-.068 2.471-.135 6.537-.48 20.166-1.48 38.173 7.915 18.006 9.394 31.56 24.645 36.887 41.744 4.991 16.032 2.882 33.484-6.109 50.466-15.15 28.61-40.903 40.811-64.968 40.811zM93.323 67.539c1.025 2.261 3.025 7.454 2.235 12.201-.404 2.437-1.84 4.344-4.017 7.235-5.167 6.865-14.788 19.645-14.074 41.332.773 23.527 9.856 36.215 33.501 46.869 23.527 10.588 57.894 4.025 75.363-28.972 7.377-13.939 9.116-27.459 5.15-40.172-4.268-13.696-15.292-26.048-30.249-33.812-14.646-7.63-24.871-6.882-30.98-6.428-1.438.14-2.883.188-4.327.143-7.756-.454-11.814-7.445-12.73-9.243a6.086 6.086 0 00-.967-1.302c-.22.083-.434.184-.638.302L94.869 65.23c-.606.334-1.183.719-1.723 1.151.03.39.088.778.177 1.16z" fill="#191919"/><path d="M63.704 55.894c-1.63 11.074-10.714 11.25-12.755 11.125-7.462-.462-12.52-4.697-7.008-8.025.361-.218.37-.395-.412-.411-54.76-1.084-46.836-13.21-.185-17.184.37 0 .404-.109.27-.327-11.823-19.326-11.252-31.3 11.284-8.403.16.16.37.126.42-.075 3.697-15.1 12.385 8.73 10.41 15.3a56.36 56.36 0 00-2.024 8z" fill="#448AFF"/><path d="M97.868 66.573c-1.268-12.435-7.965-21.535-21.35-14.191-14.394 7.923-24.628 1.983-22.074-3.504 2.991-6.437 5.714 3.083 18.1-3.731 28.828-15.847 39.264 24.157 29.853 25.115a4.129 4.129 0 01-4.056-2.147 4.126 4.126 0 01-.473-1.542z" fill="#191919"/><path d="M126.328 59.221c-4.638-.269-7.201-5.705-7.201-5.705-2.638-4.621-6.226-6.285-10.856-3.647l-16.713 9.537c-4.621 2.639-6.075 4.865-4.58 10.41 0 0 2.522 5.219 1.967 8.815-.555 3.596-19.2 18.771-18.175 49.928.941 28.619 13.848 42.139 37.459 52.777 26.417 11.906 64.834 4.36 84.025-31.93 20.066-37.896-.781-68.952-27.938-83.101-19.998-10.487-33.35-6.815-37.988-7.084z" fill="#448AFF"/><path d="M118.001 97.033c-3.537 2.697 1.681 51.213 4.126 53.894 2.445 2.68 41.172-26.611 40.794-31.207-.378-4.597-41.383-25.385-44.92-22.687z" fill="#fff"/></svg>'
)
playerIcons.set(
  'cutted',
  '<svg width="216" height="216" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M113.995 179.618c-1.614-18.293-15.276-18.965-17.369-21.713-2.092-2.747 1.48-121.257-1.041-122.324-2.521-1.067-19.973 4.773-20.688 28.098-.714 23.326-1.68 61.154.605 67.221 2.286 6.066 4.143 17.09 2.849 26.333-1.294 9.243-4.655 15.747-5.134 24.368-.445 8.192 5.193 17.645 18.217 19.191 11.494 1.311 23.611-9.663 22.561-21.174zm-10.083 0c-.177 4.831-5.933 10.52-11.218 10.268-7.327-.345-8.974-6.143-9.377-10.554-.403-4.411 4.873-11.091 10.335-10.68 5.882.404 10.47 4.622 10.26 10.932v.034z" fill="#191919"/><path d="M93.324 207.598a23.164 23.164 0 01-2.672-.151c-16.696-1.941-24.787-14.671-24.149-26.233.303-5.478 1.58-10.083 2.824-14.561a77.992 77.992 0 002.36-10.361c1.085-7.739-.47-17.645-2.52-22.989-1.756-4.68-2.605-18.343-1.025-69.825.563-18.486 10.083-27.3 15.771-30.93 2.017-1.294 9.016-5.353 14.285-3.151 4.403 1.857 4.588 6.251 4.814 11.822.143 3.496.219 8.403.244 15.04 0 12.184-.134 28.309-.302 43.913-.219 20.502-.479 45.424-.076 53.641 5.041 2.32 16.276 7.731 17.822 25.208.647 7.285-2.345 14.73-8.193 20.418a27.948 27.948 0 01-19.183 8.159zm-3.31-28.787c.411 4.201 1.605 4.269 2.991 4.327 1.386.059 4.058-2.52 4.201-3.814.118-3.361-2.79-3.916-4.041-4.008-.975.067-2.958 2.277-3.143 3.495h-.008zm-.328-133.853a18.503 18.503 0 00-1.823 1.68c-3.908 4.16-6.025 9.958-6.252 17.243-1.47 48.222-.706 61.834.202 64.758 2.52 6.806 4.663 18.99 3.193 29.51a71.197 71.197 0 01-1.462 7.361 16.094 16.094 0 017.764-3.496c-2.126-2.789-2.404-3.151-1.782-61.96.177-18.797.437-42.887.16-55.096z" fill="#191919"/><path d="M113.994 179.618c-1.613-18.293-15.275-18.965-17.368-21.713-2.092-2.747 1.48-121.257-1.042-122.324-2.52-1.067-19.972 4.773-20.687 28.098-.714 23.326-1.68 61.154.605 67.221 2.286 6.066 4.143 17.09 2.849 26.333-1.294 9.243-4.655 15.747-5.134 24.368-.446 8.192 5.193 17.645 18.216 19.191 11.495 1.311 23.612-9.663 22.561-21.174zm-10.083 0c-.176 4.831-5.932 10.52-11.217 10.268-7.327-.345-8.974-6.143-9.377-10.554-.404-4.411 4.873-11.091 10.335-10.68 5.882.404 10.469 4.622 10.259 10.932v.034z" fill="#fff"/><path d="M100.945 14.986c14.285.748 98.109 66.994 97.521 79.968-.589 12.973-44.122 69.447-57.272 66.38-13.15-3.067-94.294-62.549-95.394-76.732-1.101-14.184 40.013-70.406 55.145-69.616z" fill="#191919"/><path d="M142.303 168.215a11.57 11.57 0 01-2.622-.294c-10.083-2.319-40.257-24.191-54.818-35.433C40.086 97.911 39.338 88.29 39.094 85.123c-.512-6.193 3.546-16.117 11.965-29.435a207.174 207.174 0 0125.082-32.173c6.596-6.764 16.36-15.704 25.157-15.242 3.244.168 8.974 1.68 24.687 12.091 9.898 6.546 21.83 15.351 33.501 24.796 46.306 37.29 45.836 46.937 45.693 50.104-.622 13.613-30.636 53.037-48.55 66.641-5.604 4.26-10.234 6.31-14.326 6.31zM52.496 83.913c1.244 3.722 13.318 17.015 42.013 39.029 24.367 18.688 43.433 30.443 47.895 31.804 2.764-.504 12.856-7.369 28.182-26.384 14.914-18.486 20.435-30.25 21.09-33.308-1.63-4.083-14.091-18.191-42.097-40.61-26.711-21.375-44.962-32.139-49.012-32.77-1.495.102-7.562 3-18.645 15.294a198.059 198.059 0 00-21.006 28.266c-6.882 11.402-8.394 17.158-8.42 18.679z" fill="#191919"/><path d="M100.945 14.986c14.285.748 98.108 66.994 97.52 79.968-.588 12.973-44.122 69.447-57.272 66.38-13.15-3.067-94.293-62.549-95.394-76.732-1.1-14.184 40.013-70.406 55.146-69.616z" fill="#448AFF"/><path d="M115.591 63.343c-3.983 4.008-9.445 4.479-14.461 0-4.201-3.74-4.025-10.461 0-14.46 4.025-4 9.167-4.48 14.461 0 4.336 3.663 3.983 10.452 0 14.46zM168.468 109.515c-4.764 3.033-10.192 2.302-14.124-3.126-3.311-4.579-1.639-11.083 3.125-14.124 4.765-3.042 9.924-2.361 14.125 3.126 3.462 4.537 1.63 11.091-3.126 14.124zM87.88 87.912c-1.614.126-7.69 9.705-6.798 10.713.89 1.009 59.254 32.854 60.196 32.922.941.067 5.285-6.109 4.134-7.092-1.152-.983-56.197-36.652-57.533-36.543z" fill="#fff"/><path d="M20.483 160.939c7.923 10.453 18.947 10.503 25.778 5.949 7.185-4.781 11.075-10.982 18.385-16.805 7.31-5.823 15.654-7.184 24.015-10.495 13.049-5.109 38.912-20.754 58.322-34.022 19.267-13.175 15.881-30.46 13.696-32.09-2.185-1.63-102.511 61.617-105.872 61.205-3.361-.412-10.923-11.831-27.519-3.941-10.477 5-13.796 20.981-6.805 30.199zm26.568-18.225c3.126 4.503.05 12.435-3.957 14.326-4.008 1.891-10.083 2.949-14.285-3.361-2.915-4.42-.52-11.671 3.555-14.284 5.377-3.353 11.326-1.488 14.687 3.319z" fill="#191919"/><path d="M36.632 176.484c-7.445 0-15.368-3.361-21.502-11.487-4.63-6.108-6.201-14.662-4.201-22.88 1.932-7.932 6.831-14.284 13.444-17.427 15.855-7.562 26.207-.622 30.778 2.521 7.285-3.823 28.628-16.704 46.214-27.3 13.302-8.024 27.124-16.36 37.619-22.502 5.722-3.361 9.999-5.781 13.082-7.428 4.916-2.63 8.789-4.714 12.604-1.857 4.159 3.092 4.47 9.982 4.42 12.806-.109 5.394-2.109 19.132-18.334 30.249-18.746 12.814-45.374 29.157-59.659 34.736-2.52.992-5.041 1.807-7.402 2.588-5.621 1.832-10.562 3.445-14.864 6.865a78.083 78.083 0 00-7.73 7.293c-3.219 3.361-6.546 6.79-11.117 9.823a24.18 24.18 0 01-13.352 4zm1.496-32.065a3.888 3.888 0 00-2.1.681 5.192 5.192 0 00-1.631 2.941 3.126 3.126 0 00.067 1.966c.731 1.101 1.832 2.765 5.664 1 .949-.773 1.84-3.596 1.403-4.479-.538-.747-1.723-2.109-3.403-2.109zm15.805-3.041a16.08 16.08 0 01.933 8.461 71.14 71.14 0 015.562-4.991c6.184-4.916 12.722-7.067 19.049-9.142 2.319-.765 4.512-1.487 6.722-2.336 12.688-4.966 38.265-20.519 56.977-33.316 8.571-5.882 11.378-12.108 12.167-16.562-10.721 6.017-31.156 18.343-47.104 27.973-50.332 30.392-50.794 30.341-54.28 29.921l-.026-.008z" fill="#191919"/><path d="M20.483 160.939c7.923 10.453 18.947 10.503 25.778 5.949 7.185-4.781 11.075-10.982 18.385-16.805 7.31-5.823 15.654-7.184 24.015-10.495 13.049-5.109 38.912-20.754 58.322-34.022 19.267-13.175 15.881-30.46 13.696-32.09-2.185-1.63-102.511 61.617-105.872 61.205-3.361-.412-10.923-11.831-27.519-3.941-10.477 5-13.796 20.981-6.805 30.199zm26.568-18.225c3.126 4.503.05 12.435-3.957 14.326-4.008 1.891-10.083 2.949-14.285-3.361-2.915-4.42-.52-11.671 3.555-14.284 5.377-3.353 11.326-1.488 14.687 3.319z" fill="#fff"/></svg>'
)

// const customIcon = (icon: PlayerIcon, selector: string, attribute: string, value: string) => {
//   const iconElement = new SVGElement()
//   iconElement.append(playerIcons.get(icon))
//   iconElement.querySelector(selector)
//   iconElement.setAttribute(attribute, value)
// }
export { playerIcons }
