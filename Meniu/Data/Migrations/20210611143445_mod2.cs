using Microsoft.EntityFrameworkCore.Migrations;

namespace Meniu.Data.Migrations
{
    public partial class mod2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderFood_FoodRequest_Foodid",
                table: "OrderFood");

            migrationBuilder.DropForeignKey(
                name: "FK_OrderFood_Order_Orderid",
                table: "OrderFood");

            migrationBuilder.DropIndex(
                name: "IX_OrderFood_Foodid",
                table: "OrderFood");

            migrationBuilder.DropIndex(
                name: "IX_OrderFood_Orderid",
                table: "OrderFood");

            migrationBuilder.DropColumn(
                name: "Foodid",
                table: "OrderFood");

            migrationBuilder.DropColumn(
                name: "Orderid",
                table: "OrderFood");

            migrationBuilder.AddColumn<int>(
                name: "Food",
                table: "OrderFood",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Order",
                table: "OrderFood",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Food",
                table: "OrderFood");

            migrationBuilder.DropColumn(
                name: "Order",
                table: "OrderFood");

            migrationBuilder.AddColumn<int>(
                name: "Foodid",
                table: "OrderFood",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Orderid",
                table: "OrderFood",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_OrderFood_Foodid",
                table: "OrderFood",
                column: "Foodid");

            migrationBuilder.CreateIndex(
                name: "IX_OrderFood_Orderid",
                table: "OrderFood",
                column: "Orderid");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderFood_FoodRequest_Foodid",
                table: "OrderFood",
                column: "Foodid",
                principalTable: "FoodRequest",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_OrderFood_Order_Orderid",
                table: "OrderFood",
                column: "Orderid",
                principalTable: "Order",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
