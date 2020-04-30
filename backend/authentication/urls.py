from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .api.usuarioperfil import LogoutAndBlackListRefreshTokenView, CustomActiveDirectoryView, Validate_Token


urlpatterns = [ 
    path('token/obtain/', CustomActiveDirectoryView.as_view(), name='token_create'),
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('blacklist/', LogoutAndBlackListRefreshTokenView.as_view(), name='blacklist'),
    path('validate_token/', Validate_Token.as_view(), name='validate_token'),

]